const express = require('express');
const router = new express.Router();

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const auth = require('./middlewares/auth');
const authorization = require('./middlewares/authorization');



// User Routes
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/signout/:id', UserController.signOut);
router.get('/users', UserController.index);
router.post('/user-profile', UserController.readProfile)
router.get('/user/:id', UserController.read)
router.delete('/users/:id', UserController.delete);
router.post('/add-reading-list/:id', UserController.addReadingList);
router.post('/remove-reading-list/:id', UserController.removeReadingList);
router.post('/reading-list/:id', UserController.readingList);
router.post('/read-posts/:id', auth, UserController.readPosts);



// Post
router.get('/posts', PostController.index);
router.post('/post', PostController.create);
router.delete('/post/:id', PostController.delete);
router.post('/read-user-posts', PostController.readUserPosts);
router.get('/post/:id', PostController.read);
router.put('/post/:id', authorization, PostController.update);
router.post('/add-like/:id', PostController.addLike);
router.post('/remove-like/:id', PostController.removeLike);
router.put('/post-comment/:id', PostController.addComment)

module.exports = router;