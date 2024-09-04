import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMongoDB Connected: ${connectionInstance.connection.host}`);
    } catch (err) {
        console.error("MONGODB ERROR: ", err);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;
