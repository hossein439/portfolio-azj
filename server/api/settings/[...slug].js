import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    try {
        const slug = getRouterParam(event, 'slug')
        const splitSlug = slug.split('/')

        let { data: getById, error } = await supabase
            .from('settings')
            .select('*')
            .eq(splitSlug[1], splitSlug[0])

        return getById[0]
    } catch (error) {
        return error
    }
})