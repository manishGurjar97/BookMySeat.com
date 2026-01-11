import express from "express";
import cors from 'cors'
import mongoconnection from "./config/mongo.js";
import dotenv from "dotenv";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
dotenv.config();


// const cors=cors();
const app=express();

const port =8080;

await mongoconnection();


app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())
app.use("/api/inngest", serve({ client: inngest, functions }));





app.get("/",(req,res)=>{
    res.send("server is working...")
});




app.listen(port,()=>{
    console.log(`server listing on port ${port}`);
})