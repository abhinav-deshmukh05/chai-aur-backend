import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./db/index.js";

const app = express();


// Event listener for uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    console.error(err.stack);
    // Optionally, exit the process or take other actions
    process.exit(1); // This is usually done to stop the server due to an unrecoverable error
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection error: ", err);
    process.exit(1);
});

// Middleware to parse JSON
app.use(express.json());

// Define your routes here
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
