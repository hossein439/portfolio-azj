import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const { limit = 3, offset = 0 } = getQuery(event);

    let { data: getCategories, error } = await supabase
        .from('categories')
        .select('*')
        .order('created_at', { ascending: false })

    return getCategories
})