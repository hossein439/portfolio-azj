const multer = require('multer');
const express = require('express');
const router = new express.Router();

// controllers
const UserController = require('./controllers/userController');
const blogController = require('./controllers/blogController');
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
router.post('/blog', upload.single('image'), blogController.create);
router.get('/blog', blogController.read);
router.get('/read-all-blog', blogController.readAll);
router.get('/blog/last', blogController.getLast);
router.get('/blog/:id', blogController.single);
router.put('/blog/:id', upload.single('image'),blogController.update);
router.delete('/blog/:id/:image', blogController.delete);

// Collaboration Routes
router.post('/collaboration', upload.single('image'), collaborationController.create);
router.get('/collaboration', collaborationController.read);
router.get('/collaboration/:id', collaborationController.single);
router.put('/collaboration/:id', upload.single('image'),collaborationController.update);
router.delete('/collaboration/:id/:image', collaborationController.delete);

// effect Routes
router.post('/effect', upload.fields([{name: 'image'}, {name: 'gif'}]), effectController.create);
router.get('/effect', effectController.read);
router.get('/read-all-effect', effectController.readAll);
router.get('/effect/:id', effectController.single);
router.put('/effect/:id', upload.fields([{name: 'image'}, {name: 'gif'}]), effectController.update);
router.delete('/effect/:id/:image/:gif', effectController.delete);

// Category Routes
router.post('/category', upload.single('image'), categoryController.create);
router.get('/category', categoryController.read);
router.get('/category/:id', categoryController.single);
router.put('/category/:id', upload.single('image'),categoryController.update);
router.delete('/category/:id/:image', categoryController.delete);

module.exports = router;