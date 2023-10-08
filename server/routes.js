const multer = require('multer');
const express = require('express');
const router = new express.Router();

// controllers
const UserController = require('./controllers/userController');
const filterController = require('./controllers/filterController');
const collaborationController = require('./controllers/collaborationController');
const effectController = require('./controllers/effectController');



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

// Filter Routes
router.post('/filter', upload.single('image'), filterController.create);
router.get('/filter', filterController.read);

// Collaboration Routes
router.post('/collaboration', upload.single('image'), collaborationController.create);
router.get('/collaboration', collaborationController.read);
router.get('/collaboration/:id', collaborationController.single);
router.put('/collaboration/:id', upload.single('image'),collaborationController.update);
router.delete('/collaboration', collaborationController.delete);


router.post('/effect', upload.single('image'), effectController.create);
router.get('/effect', effectController.read);

module.exports = router;