import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { error } from "console";


const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());


mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB connected");
        app.listen(PORT,()=>{
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((error)=>{
        console.error("MongoDB error", error);
    })


app.listen(PORT,()=>{

});