import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();
// Model
const inHotelCollection = Hotel;

// CREATE
router.route('/').post(async (req, res) => {
  try {
    const newHotelDoc = await inHotelCollection.create(req.body);
    res.status(200).json(newHotelDoc);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// UPDATE
router.route('/:id').patch(async (req, res) => {
  const { id } = req.params;

  try {
    const updatedHotelDoc = await inHotelCollection.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedHotelDoc);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
router.route('/:id').delete(async (req, res) => {
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
    res.status(500).json({ error: error });
  }
});

// GET ONE
router.route('/:id').get(async (req, res) => {
  const { id } = req.params;

  try {
    const HotelDoc = await inHotelCollection.findById(id);
    res.status(200).json(HotelDoc);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// GET ALL
router.route('/').get(async (req, res) => {
  try {
    const HotelDocs = await inHotelCollection.find();
    res.status(200).json(HotelDocs);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
