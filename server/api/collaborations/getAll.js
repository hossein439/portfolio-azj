import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const { limit = 3, offset = 0 } = getQuery(event);

    let { data: getCollaborations, error } = await supabase
        .from('collaborations')
        .select('*')
        .order('created_at', { ascending: false })

    return getCollaborations
})