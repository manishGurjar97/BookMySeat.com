import mongoose from 'mongoose';

export default async function mongoconnection(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db connect successfuly");
    }catch(err){
        console.log(err.message);
    }
    
};