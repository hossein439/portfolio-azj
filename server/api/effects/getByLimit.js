import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const { limit = 6, offset = 0 } = getQuery(event);

    let { data: getEffects, error } = await supabase
        .from(nameOfTable)
        .select(`id, name, image, alt, link, gif, category_id, categories(name)`)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);


    return getEffects
})