import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const mongoDBurl =process.env.MONGODB_URL;


 const ConnectToMongoDBsserver = async () =>
{
    try{
        const result = await mongoose.connect(mongoDBurl)
        // console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }
}
export default ConnectToMongoDBsserver
