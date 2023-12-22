import supabase from '../../supabase.js'
import { format } from 'date-fns';

export default defineEventHandler(async (event) => {
    const { title, alt, description, image, isChangedImage, exFileName, id } = await readBody(event)
    const date = new Date();

    if (isChangedImage && image) {
        removeImage(exFileName);
        const imageCreated = saveImage(image);

        const { data: updateBlog, error } = await supabase
            .from('blogs')
            .update({ image: imageCreated, title, alt, description, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateBlog

    } else {

        const { data: updateBlog, error } = await supabase
            .from('blogs')
            .update({ title, alt, description, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateBlog;
    }
})