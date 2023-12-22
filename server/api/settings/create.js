import { format } from 'date-fns';
import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { alt, description, image, name } = await readBody(event)
    const imageCreated = saveImage(image);
    const date = new Date();

    const { data: categoryCreated, error } = await supabase
        .from(process.env.TABLE_NAME_CATEGORY)
        .insert([
            { name, image: imageCreated, description, alt, created_at: format(date, 'yyyy-MM-dd HH:mm') },
        ])
        .select()

    return { categoryCreated }
})