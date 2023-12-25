import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const { email, password } = await readBody(event)

    let { data: user, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .eq('password', password);

    if (error) {
        return 'hello'
    }

    if (!user.length) {
        setResponseStatus(event, 404)
        return 'user not exist'
    }

    return user
})