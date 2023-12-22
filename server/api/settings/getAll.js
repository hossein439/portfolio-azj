import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const { limit = 3, offset = 0 } = getQuery(event);

    let { data: getSettings, error } = await supabase
        .from(process.env.TABLE_NAME_SETTING)
        .select('*')
        .order('created_at', { ascending: false })

    return getSettings
})