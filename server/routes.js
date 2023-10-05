const express = require('express');
const router = new express.Router();
const UserController = require('./controllers/UserController');



// User Routes
router.post('/login', UserController.login);


module.exports = router;