const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const protect = require('../middleware/authMiddleware');
const { signup, login } = require('../controllers/userController');

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
