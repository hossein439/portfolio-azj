import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const id = getRouterParam(event, 'id')

    let { data: getById, error } = await supabase
        .from('collaborations')
        .select('*')
        .eq('id', id)

    return getById
})