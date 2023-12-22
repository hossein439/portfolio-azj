import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const { limit = 3, offset = 0 } = getQuery(event);

    let { data: getEffects, error } = await supabase
        .from(process.env.TABLE_NAME_EFFECT)
        .select(`id, name, image, alt, link, gif, category_id, categories(name)`)
        .order('created_at', { ascending: false })

    return getEffects
})