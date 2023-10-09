const multer = require('multer');
const express = require('express');
const router = new express.Router();

// controllers
const UserController = require('./controllers/userController');
const filterController = require('./controllers/filterController');
const collaborationController = require('./controllers/collaborationController');
const effectController = require('./controllers/effectController');
const categoryController = require('./controllers/categoryController');




const upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg|svg|gif)$/)) {
            return cb(new Error('Please Upload png or jpg or jpeg or svg or gif'));
        }
        cb(undefined, true)
    },
})


// User Routes
router.post('/login', UserController.login);

// Filter Routes
router.post('/filter', upload.single('image'), filterController.create);
router.get('/filter', filterController.read);
router.get('/filter/:id', filterController.single);
router.put('/filter/:id', upload.single('image'),filterController.update);
router.delete('/filter/:id/:image', filterController.delete);

// Collaboration Routes
router.post('/collaboration', upload.single('image'), collaborationController.create);
router.get('/collaboration', collaborationController.read);
router.get('/collaboration/:id', collaborationController.single);
router.put('/collaboration/:id', upload.single('image'),collaborationController.update);
router.delete('/collaboration/:id/:image', collaborationController.delete);

// effect Routes
// router.post('/effect', upload.single('image'), effectController.create);
router.post('/effect', upload.fields([{name: 'image'}, {name: 'gif'}]), effectController.create);
router.get('/effect', effectController.read);
router.get('/effect/:id', effectController.single);
router.put('/effect/:id', upload.fields([{name: 'image'}, {name: 'gif'}]), effectController.update);
router.delete('/effect/:id/:image', effectController.delete);

// Category Routes
router.post('/category', upload.single('image'), categoryController.create);
router.get('/category', categoryController.read);
router.get('/category/:id', categoryController.single);
router.put('/category/:id', upload.single('image'),categoryController.update);
router.delete('/category/:id/:image', categoryController.delete);

module.exports = router;