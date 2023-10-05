const Post = require('../models/Posts');
const User = require('../models/Users');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

module.exports = {

    async register(req, res) {
        try {
            const user = new User(req.body);
            const token = await user.generateAuthToken();
            res.cookie('auth_token', token, { secure: false, httpOnly: false }).send({
                user,
                token
            });
        } catch (err) {
            res.send(err.error)
        }
    },

    async login(req, res) {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password);
            const token = await user.generateAuthToken();

            res.cookie('auth_token', token, { secure: false, httpOnly: false }).send({
                user,
                token
            });

        } catch (err) {
            res.status(404).send(err);
        }
    },

    async signOut(req, res) {
        try {
            // const user = await User.findByIdAndDelete(req.params.id);
            const user = await User.findByIdAndUpdate(req.params.id, {isDeleted: true});
            if (!user) {
                return res.status(404).send('user not found');
            }
            res.clearCookie("auth_token");
            res.send({
                success: 'your user removed',
            });
            res.end();
        } catch (err) {
            res.send(err.error);
        }
    },

    async createSuperAdmin(req, res) {

        const userSeed = {
            name: 'admin',
            lastname: 'admin',
            email: 'admin@gmail.com',
            password: 'helloadmin',
            roles: 'super-admin',
            avatar: undefined,
            token: ''
        }

        try {
            const user = new User(userSeed);
            const token = await user.generateAuthToken();
            res.status(203).send({
                success: 'Super admin created!'
            });
        } catch (err) {
            res.send(err.error)
        }
    },

    async index(req, res) {
        try {
            const user = await User.find();
            res.send(user);
        } catch (err) {
            res.send(err)
        }
    },

    async create(req, res) {
        try {
            const userJson = JSON.parse(req.body.user);
            let buffer;
            if (!req.file) {
                userJson.avatar = undefined
            } else {
                buffer = await sharp(req.file.buffer).png().resize({ width: 100, height: 100 }).toBuffer();
            }
            userJson.avatar = buffer;
            const user = new User(userJson);
            const token = await user.generateAuthToken();
            res.send({
                user,
                token
            });
        } catch (err) {
            res.send(err)
        }
    },

    async update(req, res) {
        try {
            let user;
            if (req.file) {
                fs.rename(req.file.path, `./uploads/${req.file.filename}.jpg`, (err) => {
                    console.log(err);
                });

                await sharp(path.resolve(__dirname, `../../uploads/${req.file.filename}.jpg`)).resize({ width: 100, height: 100 }).jpeg().toFile(path.resolve(__dirname, `../../uploads/avatar-${req.file.filename}.jpg`));

                req.body.avatar = `avatar-${req.file.filename}.jpg`;
                user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

                fs.unlink(path.resolve(__dirname, `../../uploads/${req.file.filename}.jpg`), (err) => {
                    console.log(err);
                });
            } else {
                user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            }
            res.status(200).send(user);
        } catch (err) {
            res.send(err)
        }
    },

    async delete(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {isDeleted: true});
            if (!user) {
                return res.status(404).send('user not found');
            }
            res.send({
                success: 'your user removed'
            });
        } catch (err) {
            res.send(err)
        }
    },

    async read(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).send('user not found');
            }
            res.send(user);
        } catch (err) {
            res.send(err)
        }
    },

    async readPosts(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).send('user not found');
            }
            const posts = await Post.find({author: req.params.id}).exec();
            res.send({
                user,
                posts 
            });
        } catch (err) {
            res.send(err)
        }
    },

    async readProfile(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id });
            res.send(user);
        } catch (err) {
            res.send(err)
        }
    },

    addReadingList(req, res) {
        try {
            User.findOne({ _id: req.params.id }, function(err, user) {
                if (!user.readingList.some(item => item == req.body.readingList)) {
                    user.readingList.push(req.body.readingList);
                    user.save()
                } else {
                    return;
                }
            });
            Post.findOne({ _id: req.body.readingList }, function(err, post) {
                if (!post.bookedBy.some(post => post == req.params.id)) {
                    post.bookedBy.push(req.params.id);
                    post.save()
                } else {
                    return;
                }
            })
            res.status(200).send('success');
        } catch (err) {
            res.status(500).send(err);
        }
    },

    removeReadingList(req, res) {
        try {
            User.findOne({ _id: req.params.id }, function(err, user) {
                const indexPost = user.readingList.findIndex(item => item == req.body.readingList);
                user.readingList.splice(indexPost, 1);
                user.save()
            });
            Post.findOne({ _id: req.body.readingList }, function(err, post) {
                const indexPost = post.bookedBy.findIndex(item => item == req.params.id);
                post.bookedBy.splice(indexPost, 1);
                post.save()
            })
            res.status(200).send('success');
        } catch (err) {
            res.status(500).send(err);
        }
    },

    async readingList(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id });
            const whereCondition = user.readingList;
            const posts = await Post.find({}).where('_id').in(whereCondition).populate('author').exec();
            res.status(200).send(posts);
        } catch (err) {
            res.status(404).send(err);
        }
    },

}