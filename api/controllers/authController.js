import User from '../models/User.js';
import createError from '../utils/error.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const inUserCollection = User;

const register = async (req, res, next) => {
  const { username, password, email } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  try {
    const newUserDoc = await inUserCollection.create({
      username,
      email,
      password: hash,
    });

    res.status(201).json({
      status: 'success',
      message: 'User has been registered!',
      newUserDoc,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { username, password: pass } = req.body;

  try {
    const UserDoc = await inUserCollection.findOne({
      username,
    });
    if (!UserDoc) return next(createError(404, 'User not found!'));

    // check password correctness
    const isPasswordCorrect = await bcrypt.compare(pass, UserDoc.password);
    if (!isPasswordCorrect)
      return next(createError(400, 'Wrong password or username!'));

    const token = jwt.sign(
      { id: UserDoc._id, isAdmin: UserDoc.isAdmin },
      process.env.JWT_SIGNATURE
    );

    // removed password and isAdmin fields
    const { password, isAdmin, ...restFields } = UserDoc._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({
        status: 'success',
        ...restFields,
      });
  } catch (error) {
    next(error);
  }
};

export default { register, login };
