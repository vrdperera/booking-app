import express from 'express';
// import controllers
import userController from '../controllers/userController.js';

const router = express.Router();

// CREATE
router.route('/').post(userController.createUserDoc);
// UPDATE
router.route('/:id').patch(userController.updatedUserDoc);
// DELETE
router.route('/:id').delete(userController.deleteUserDoc);
// GET ONE
router.route('/:id').get(userController.getUserDoc);
// GET ALL
router.route('/').get(userController.getAllUserDocs);

export default router;
