const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors");

dotenv.config();

const app = express();

const corsOptions = {
    origin: 'http://localhost:8080', // Replace this with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Database connection error:', err));

// User routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
