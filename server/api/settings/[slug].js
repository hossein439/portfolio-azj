import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const meta = getRouterParam(event, 'slug')



    let { data: getById, error } = await supabase
        .from('settings')
        .select('*')
        .eq('meta', meta)

    const table = process.env.TABLE_NAME_SETTING;
    if (error) {
        return {
            error,
            meta,
            table
        }
    } else {

        return getById
    }
})