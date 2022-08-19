import express from 'express';
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).send('this is auth endpoint');
});

router.route('/register').get((req, res) => {
  res.status(200).send('this is auth register endpoint');
});

export default router;
