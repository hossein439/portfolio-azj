import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, 'id')

        let { data: getById, error } = await supabase
            .from('categories')
            .select('*')
            .eq('id', id)

        return getById

    } catch (error) {
        throw error
    }
})