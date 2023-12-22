import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    let { data: getLast, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)

    return getLast
})