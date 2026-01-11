import express from 'express';
import cors from 'cors';
import Connectmongo from './config/mongo.js';
// import loginRouter from "./routes/userRoute.js";
import { clerkMiddleware } from '@clerk/express'
import User from "./models/user.js";
import { requireAuth } from "@clerk/express";

const app = express();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())

console.log("📌 userRouter mounted");
// app.use("/api", loginRouter);

await Connectmongo();

const port = 8080;

app.get("/", (req, res) => {
  res.send("server is workinggh");
});
app.post("/api/login", requireAuth(), async (req, res) => {
  console.log("🔥 /api/login HIT");

  try {
    const userId = req.auth.userId;

    const { name, email, image } = req.body;

    let user = await User.findById(userId);

    if (!user) {
      user = await User.create({
        _id: userId,
        name,
        email,
        image,
      });
    }

    res.json({ success: true, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});



app.listen(port, () => {
  console.log("server is on...");
});
