import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const meta = getRouterParam(event, 'slug')

    let { data: getById, error } = await supabase
        .from(process.env.TABLE_NAME_SETTING)
        .select('*')
        .eq('meta', meta)

    return getById
})