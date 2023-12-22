import { format } from 'date-fns';
import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { name, alt, description, image, isChangedImage, exFileName, id } = await readBody(event)
    const date = new Date();

    if (isChangedImage && image) {
        removeImage(exFileName);
        const imageCreated = saveImage(image);

        const { data: updateCategory, error } = await supabase
            .from('categories')
            .update({ name, image: imageCreated, alt, description, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateCategory

    } else {

        const { data: updateCategory, error } = await supabase
            .from('categories')
            .update({ name, alt, description, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateCategory;
    }
})