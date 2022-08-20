import express from 'express';
// import controllers
import hotelController from '../controllers/hotelController.js';

const router = express.Router();

// CREATE
router.route('/').post(hotelController.createHotelDoc);
// UPDATE
router.route('/:id').patch(hotelController.updatedHotelDoc);
// DELETE
router.route('/:id').delete(hotelController.deleteHotelDoc);
// GET ONE
router.route('/:id').get(hotelController.getHotelDoc);
// GET ALL
router.route('/').get(hotelController.getAllHotelDocs);

export default router;
