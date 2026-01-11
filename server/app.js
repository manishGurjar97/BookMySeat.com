import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import mongoconnection from "./config/mongo.js";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// Inngest (no Clerk)
app.use("/api/inngest", serve({ client: inngest, functions }));

// Clerk middleware
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("server is working...");
});

mongoconnection().then(() => {
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
});
