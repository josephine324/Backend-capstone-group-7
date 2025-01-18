const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");

dotenv.config();

const app = express();

app.use(bodyParser.json());


app.use(cors());


const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
    console.error("JWT_SECRET is not defined in the .env file");
    process.exit(1); // Exit the application if the key is missing
}
// Connect to MongoDB
const mongoUrl = process.env.MONGO_URI;

if (!mongoUrl) {
    console.error("MONGO_URL is not defined in your .env file");
    process.exit(1);
}

mongoose
    .connect(mongoUrl) // No need to pass options for Mongoose >= v6
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Database connection error:", error));

// User routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
