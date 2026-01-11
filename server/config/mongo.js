import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
async function mongoconnection(){
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

}

export default mongoconnection;

