import jwt from 'jsonwebtoken';

export default fromNodeMiddleware((req, res, next) => {
    if (!req.url.includes('users') && !req.url.includes('auth')) {
        const token = req.headers.cookie.replace('auth_token=', '');
        const keyToken = useRuntimeConfig().keyJwtToken;
        try {
            const isVerified = jwt.verify(token, keyToken)
            if (isVerified) next()
            else {
                throw 'You need login again !'
            }
        } catch (error) {
            // throw error
            next('You need authentication')
        }
    }
    // next()
})