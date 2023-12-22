import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const { limit = 3, offset = 0 } = getQuery(event);

    let { data: getBlogs, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)
        .limit(limit)


    return getBlogs 
})