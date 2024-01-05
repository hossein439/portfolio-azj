import jwt from 'jsonwebtoken';

export function useJwt() {
    const secretKey = useRuntimeConfig().keyJwtToken;
    function verifyToken(token) {
        console.log(token)
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                console.error('JWT Verification Error:', err);
            } else {
                console.log('Decoded Token:', decoded);
            }
        })
    }

    return { verifyToken }
}