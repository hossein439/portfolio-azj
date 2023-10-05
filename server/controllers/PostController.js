const Post = require('../models/Posts');
const fs = require('fs');

module.exports = {
    async create(req, res) {
        try {
            // fs.rename(req.file.path, `./uploads/${req.file.filename}.jpg`, (err) => {
            //     console.log(err);
            // });
            
            // req.body.coverImage = `${req.file.filename}.jpg`;

            const post = new Post(req.body);
            await post.save();

            res.status(200).send(post);
        } catch (err) {
            res.status(500).send(err)
        }
    },

    async read(req, res) {
        try {
            const post = await Post.findById(req.params.id).populate('author').exec();
            // const post = await Post.findById(req.params.id);
            if (!post) {
                return res.status(404).send('post not found');
            }
            res.status(200).send(post);
        } catch (err) {
            res.status(500).send(err)
        }
    },


    async delete(req, res) {
        try {
            // const post = await Post.findById(req.params.id).populate('author').exec()
            const post = await Post.findByIdAndDelete(req.params.id);
            if (!post) {
                return res.status(404).send('post not found');
            }
            res.status(200).send(post);
        } catch (err) {
            res.status(500).send(err)
        }
    },

    async update(req, res) {
        try {
            // req.body.coverImage = req.body.imageFileName;
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
            if (!post) {
                return res.status(404).send('post not found');
            }
            res.status(200).send(post);
        } catch ({errors:error}) {
            // console.log(err);
            res.status(500).send({error: error})
        }
    },

    async index(req, res) {
        try {
            const posts = await Post.find({ isPublished: true }).sort([['updatedAt', 'desc']]).populate('author').exec();
            // const posts = await Post.find();
            res.status(200).send(posts)
        } catch (err) {
            res.status(404).send(err)
        }
    },

    async readUserPosts(req, res) {
        try {
            const id = req.body.id;
            const posts = await Post.find({ author: id });
            res.send(posts)
        } catch (err) {
            res.status(404).send(err);
        }
    },

    addLike(req, res) {
        try {
            Post.findOne({ _id: req.body.likedBy }, function(err, post) {
                if (!post.likedBy.some(post => post == req.params.id)) {
                    post.likedBy.push(req.params.id);
                    post.save()
                } else {
                    return;
                }
            })
            res.status(200).send('liked');
        } catch (err) {
            res.status(500).send(err);
        }
    },

    removeLike(req, res) {
        try {
            Post.findOne({ _id: req.body.likedBy }, function(err, post) {
                const indexPost = post.likedBy.findIndex(item => item === req.params.id);
                post.likedBy.splice(indexPost, 1);
                post.save()
            })
            res.status(200).send('unliked');
        } catch (err) {
            res.status(500).send(err);
        }
    },

    async addComment (req, res) {
        try {
            const post = await Post.findOne({_id: req.params.id})
            console.log(req.body);
            post.comments = req.body;
            post.save();
            res.status(200).send();
        } catch(e) {
            res.status(400).send(e);
        }
    }

}