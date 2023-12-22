import { format } from 'date-fns';
import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { title, alt, description, image } = await readBody(event)
    const imageCreated = saveImage(image);
    const date = new Date();

    const { data: blogCreated, error } = await supabase
        .from('blogs')
        .insert([
            { title, image: imageCreated, description, alt, created_at: format(date, 'yyyy-MM-dd HH:mm') },
        ])
        .select()

    return { blogCreated }
})