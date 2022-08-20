import Hotel from '../models/Hotel.js';
const inHotelCollection = Hotel;

const createHotelDoc = async (req, res, next) => {
  try {
    const newHotelDoc = await inHotelCollection.create(req.body);
    res.status(200).json(newHotelDoc);
  } catch (error) {
    next(error);
  }
};

const updatedHotelDoc = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedHotelDoc = await inHotelCollection.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedHotelDoc);
  } catch (error) {
    next(error);
  }
};

const deleteHotelDoc = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedHotelDoc = await inHotelCollection.findByIdAndDelete(id);
    if (!deletedHotelDoc) {
      res
        .status(200)
        .json({ message: 'This record is no longer in Database! ' });
    } else {
      res
        .status(200)
        .json({ message: 'Record has been deleted!', deletedHotelDoc });
    }
  } catch (error) {
    next(error);
  }
};

const getHotelDoc = async (req, res, next) => {
  const { id } = req.params;

  try {
    const HotelDoc = await inHotelCollection.findById(id);
    res.status(200).json(HotelDoc);
  } catch (error) {
    next(error);
  }
};

const getAllHotelDocs = async (req, res, next) => {
  try {
    const HotelDocs = await inHotelCollection.find();
    res.status(200).json(HotelDocs);
  } catch (error) {
    next(error);
  }
};

export default {
  createHotelDoc,
  updatedHotelDoc,
  deleteHotelDoc,
  getHotelDoc,
  getAllHotelDocs,
};
