// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app,server } from "./socket/socket.js";
dotenv.config({});
import path from "path";
 
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
console.log(__dirname);

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
const corsOption={
    origin:process.env.URL,
    credentials:true
};
app.use(cors(corsOption)); 


// routes
app.use("/api/v1/user",userRoute); 
app.use("/api/v1/message",messageRoute);
 
// app.use(express.static(path.join(DIRNAME,"/frontend/dist")));
// app.use("*",(_,res) => {
//     res.sendFile(path.resolve(DIRNAME, "frontend","dist","index.html"));
// });
app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});


server.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});

