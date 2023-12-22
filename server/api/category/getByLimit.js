import supabase from '../../supabase.js'
const nameOfTable = 'blogs';

export default defineEventHandler(async (event) => {

    const { limit = 3, offset = 0 } = getQuery(event);

    let { data: getBlogs, error } = await supabase
        .from(nameOfTable)
        .select('*')
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)
        .limit(limit)

    console.log(getBlogs);

    return getBlogs 
})