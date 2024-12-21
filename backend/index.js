import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoutes.js';
import messageRoute from './routes/messageRoutes.js';

dotenv.config({});

const app = express(); 

const PORT = process.env.PORT || 5000;

//middleweares
app.use(express.json());
app.use(cookieParser());

//routes
//http://localhost:8000/api/v1/user/register
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on port ${PORT}`);
});