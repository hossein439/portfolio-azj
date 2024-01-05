import supabase from '../../supabase.js'
import { sendEmailOtp } from '../../emails/sendOtp.js'

export default defineEventHandler(async (event) => {
    const { firstname, email } = await readBody(event)
    const otp = Math.floor(100000 + Math.random() * 900000);

    try {
        const { data, error } = await supabase
            .from('otp')
            .insert([
                { otp, email },
            ])
            .select()
        if (error) {
            console.log(error)
            throw createError({
                statusCode: 409,
                statusMessage: 'Your email exists'
            })
        } else {
            sendEmailOtp(email, firstname, otp)
            return data
        }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Server is Down'
        })
    }
})