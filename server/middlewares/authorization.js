const authorization = async(req, res, next) => {
    try{
        // const token = req.headers['authorization'];
        console.log('hello unauthoasdfsad')
        const { postAuthor, author} = req.body;
        if(postAuthor !== author) {
            throw('unauthorized');
        }
        next();
    }
    catch(err) {
        res.status(403).send({
            error: 'unauthorized'
        });
    }
}

module.exports = authorization;