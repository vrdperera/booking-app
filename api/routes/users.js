import express from 'express';
// import controllers
import userController from '../controllers/userController.js';
import { veryfyToken, veryfyUser } from '../utils/veryfyToken.js';

const router = express.Router();

router.route('/checkauthentication').get(veryfyToken, (req, res, next) => {
  res.send('Hello User welcome to the party!');
});

router.route('/checkuser/:id').get(veryfyUser, (req, res, next) => {
  res.send(
    'Hello User welcome to the party! now you can do what ever you want!'
  );
});

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
