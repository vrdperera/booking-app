import express from 'express';
// import controllers
import userController from '../controllers/userController.js';
import { veryfyAdmin, veryfyToken, veryfyUser } from '../utils/veryfyToken.js';

const router = express.Router();

// router.route('/checkauthentication').get(veryfyToken, (req, res, next) => {
//   res.send('Hello User welcome to the party!');
// });

// router.route('/checkuser/:id').get(veryfyUser, (req, res, next) => {
//   res.send(
//     'Hello User welcome to the party! now you can do what ever you want!'
//   );
// });

// router.route('/checkadmin/:id').get(veryfyAdmin, (req, res, next) => {
//   res.send(
//     'Hello Admin welcome to the party! now you can do what ever you want!'
//   );
// });

// CREATE
router.route('/').post(veryfyUser, userController.createUserDoc);
// UPDATE
router.route('/:id').patch(veryfyUser, userController.updatedUserDoc);
// DELETE
router.route('/:id').delete(veryfyUser, userController.deleteUserDoc);
// GET ALL
router.route('/').get(veryfyAdmin, userController.getAllUserDocs);
// // GET ONE
// router.route('/:id').get(userController.getUserDoc);

export default router;
