import express from 'express';
import authRoute from './routes/auth.js';

export const app = express();

app.use('/api/auth', authRoute);
