const multer = require('multer');
const express = require('express');
const router = new express.Router();
const UserController = require('./controllers/userController');
const FilterController = require('./controllers/filterController');
const collaborationController = require('./controllers/collaborationController');



const upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg|svg)$/)) {
            return cb(new Error('Please Upload png or jpg or jpeg or svg'));
        }
        cb(undefined, true)
    },
})


// User Routes
router.post('/login', UserController.login);

router.post('/filter', upload.single('image'), FilterController.create);
router.get('/filter', FilterController.read);

router.post('/collaboration', upload.single('image'), collaborationController.create);
router.get('/collaboration', collaborationController.read);

module.exports = router;