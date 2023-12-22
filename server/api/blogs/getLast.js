import supabase from '../../supabase.js'
const nameOfTable = 'blogs';

export default defineEventHandler(async (event) => {
    let { data: getLast, error } = await supabase
        .from(nameOfTable)
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)

    return getLast
})