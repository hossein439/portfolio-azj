import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {

    const id = getRouterParam(event, 'id')

    let { data: getEffect, error } = await supabase
        .from('effects')
        .select(`id, name, image, alt, link, gif, category_id, categories(name)`)
        .eq('id', id)

    return getEffect
})