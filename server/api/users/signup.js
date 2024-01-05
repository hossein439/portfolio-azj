import supabase from '../../supabase.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event) => {

    let { firstname, lastname, email, password, otp } = await readBody(event)

    let { data: isExistOtp, error: errorOtp } = await supabase
        .from('otp')
        .select('*')
        .eq('otp', otp)
        .eq('email', email)

    const keyToken = useRuntimeConfig(event).keyJwtToken;
    const hashPassword = await bcrypt.hash(password, 8);


    if (isExistOtp.length) {
        const fullname = `${firstname} ${lastname}`
        const token = jwt.sign({ email: email.toString() }, keyToken, { expiresIn: '10d' });
        const { data, error: errorUser } = await supabase
            .from('users')
            .insert([
                { name: fullname, email, token, password: hashPassword },
            ])
            .select()

        if (data) {
            setResponseStatus(event, 200)
            return data
        }

        console.log(errorUser)

        if (errorUser) {
            throw createError({
                statusCode: 500,
                statusMessage: errorUser.details
            })
        }

    } else {
        throw createError({
            statusCode: 404,
            statusMessage: 'Your otp is invalid'
        })
    }
    throw createError({
        statusCode: 500,
        statusMessage: 'Server is Down'
    })
})