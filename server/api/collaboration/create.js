import { format } from 'date-fns';
import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { link, alt, image } = await readBody(event)
    const imageCreated = saveImage(image);
    const date = new Date();

    const { data: collaboration, error } = await supabase
        .from(process.env.TABLE_NAME_COLLABORATION)
        .insert([
            { link, image: imageCreated, alt, created_at: format(date, 'yyyy-MM-dd HH:mm') },
        ])
        .select()

    return { collaboration }
})