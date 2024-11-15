import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToMongoDB = async () => {
    try {
        const uri = process.env.Mongo_DB_URI;
        await mongoose.connect(uri);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log("Error connecting to mongoDB:", error.message);
    }
};

export default connectToMongoDB;
