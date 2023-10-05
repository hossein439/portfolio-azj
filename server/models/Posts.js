const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        // validate(value) {
        //     console.log('validator',value);
        //     throw new Error('hello');
        // }
    },
    body: {
        type: String,
        trim: true,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        trim: true,
        required: true,
    },
}, {
    timestamps: true
});

const Post = model('Post', postSchema);

module.exports = Post;