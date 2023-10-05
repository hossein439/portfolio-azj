const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const auth = async(req, res, next) => {
    try{
        const token = req.cookies.auth_token;
        const decode = jwt.verify(token, 'nuxtexpressapp')
        const user = await User.findOne({_id: decode._id, token, isDeleted: false});
        if(!user) {
            throw('you need to authentication');
        }
        req.user = user;
        req.token = token;
        next();
    }
    catch(err) {
        res.status(403).send({
            err: 'you need to authentication'
        });
    }
}

module.exports = auth;