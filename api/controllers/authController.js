import User from '../models/User.js';
import createError from '../utils/error.js';
import bcrypt from 'bcryptjs';

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

export default { register };
