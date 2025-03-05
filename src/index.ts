import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import webhookRouter from './routes/webhook';
import mongoose from 'mongoose';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());

app.use('/webhook', webhookRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});