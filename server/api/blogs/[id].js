import supabase from '../../supabase.js'
const nameOfTable = 'blogs';

export default defineEventHandler(async (event) => {

    const id = getRouterParam(event, 'id')

    let { data: getById, error } = await supabase
        .from(nameOfTable)
        .select('*')
        .eq('id', id)

    return getById
})