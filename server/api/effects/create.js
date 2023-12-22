import { format } from 'date-fns';
import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { name, link, alt, categoryId, gif, image } = await readBody(event)

    const imageCreated = saveImage(image);
    const gifCreated = saveImage(gif, 'gif');
    const date = new Date();

    const { data: effectCreated, error } = await supabase
        .from('effects')
        .insert([
            { name, image: imageCreated, gif: gifCreated, link, alt, category_id: categoryId, created_at: format(date, 'yyyy-MM-dd HH:mm') },
        ])
        .select()

    return { effectCreated }
})