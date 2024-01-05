import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    try {
        const { limit = 3, offset = 0 } = getQuery(event);

        let { data: getBlogs, error } = await supabase
            .from('blogs')
            .select('*')
            .order('created_at', { ascending: false })

        return getBlogs

    } catch (error) {
        throw error
    }
})