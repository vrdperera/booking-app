import User from '../models/User.js';
const inUserCollection = User;

const createUserDoc = async (req, res, next) => {
  try {
    const newUserDoc = await inUserCollection.create(req.body);
    res.status(200).json(newUserDoc);
  } catch (error) {
    next(error);
  }
};

const updatedUserDoc = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedUSerDoc = await inUserCollection.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedUSerDoc);
  } catch (error) {
    next(error);
  }
};

const deleteUserDoc = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedUserDoc = await inUserCollection.findByIdAndDelete(id);
    if (!deletedUserDoc) {
      res
        .status(200)
        .json({ message: 'This record is no longer in Database! ' });
    } else {
      res
        .status(200)
        .json({ message: 'Record has been deleted!', deletedUserDoc });
    }
  } catch (error) {
    next(error);
  }
};

const getUserDoc = async (req, res, next) => {
  const { id } = req.params;

  try {
    const UserDoc = await inUserCollection.findById(id);
    res.status(200).json(UserDoc);
  } catch (error) {
    next(error);
  }
};

const getAllUserDocs = async (req, res, next) => {
  try {
    const UserDocs = await inUserCollection.find();
    res.status(200).json(UserDocs);
  } catch (error) {
    next(error);
  }
};

export default {
  createUserDoc,
  updatedUserDoc,
  deleteUserDoc,
  getUserDoc,
  getAllUserDocs,
};
