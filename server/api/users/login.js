import supabase from '../../supabase.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {

    const { email, password } = await readBody(event)

    let { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)

    if (!user.length) {
        throw createError({
            statusCode: 400,
            statusMessage: 'User not exist',
        })
    } else {
        const { password: userPassword } = user[0]
        const isMatchPass = await bcrypt.compare(password, userPassword);
        const keyToken = useRuntimeConfig(event).keyJwtToken;


        if (!isMatchPass) {
            setResponseStatus(event, 404, 'Unable to login please check your password or email !')
        }

        const token = jwt.sign({ email: email.toString() }, keyToken, { expiresIn: '1m' });
        user[0].token = token

        let { data: user2, error } = await supabase
            .from('users')
            .update({ ...user[0] })
            .eq('email', email)
            .select()

        return user2
    }
})