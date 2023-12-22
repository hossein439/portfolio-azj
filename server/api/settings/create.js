import { format } from 'date-fns';
import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { alt, image, text, meta } = await readBody(event)
    const imageCreated = saveImage(image);
    const date = new Date();

    const data = {
        alt,
        image: imageCreated,
        text
    }

    const { data: setting, error } = await supabase
        .from('settings')
        .insert([
            { data, meta, created_at: format(date, 'yyyy-MM-dd HH:mm') },
        ])
        .select()

    return { setting }
})