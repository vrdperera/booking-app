import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

import { app } from './app.js';

const db = mongoose.connection;

const MongoDB = process.env.DB_URI.replace(
  '<password>',
  process.env.DB_PASSWORD
);

const mongooseConnect = async () => {
  try {
    await mongoose.connect(MongoDB);
    console.log('mongoose connection successfully established!');
  } catch (error) {
    throw error;
  }
};

db.on('error', (error) =>
  console.error('Error in MongoDb connection: ' + error)
);
db.on('connected', () => console.log('Data Db connected'));
db.on('disconnected', () => console.log('MongoDB disconnected!'));

app.listen(8080, () => {
  mongooseConnect();
  console.log('Connected to Server!');
});
