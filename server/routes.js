const multer = require('multer');
const express = require('express');
const router = new express.Router();
const UserController = require('./controllers/UserController');
const FilterController = require('./controllers/FilterController');


const upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
            return cb(new Error('Please Upload png or jpg or jpeg'));
        }
        cb(undefined, true)
    },
})


// User Routes
router.post('/login', UserController.login);

router.post('/filter', upload.single('image'), FilterController.create);
router.get('/filter', FilterController.read);

module.exports = router;