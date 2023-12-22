import supabase from '../../supabase.js'
import removeImage from '../../utils/removeImage.js';
import saveImage from '../../utils/saveImage.js';

export default defineEventHandler(async (event) => {
    const { name, alt, description, image, isChangedImage, exFileName, id } = await readBody(event)

    if (isChangedImage && image) {
        console.log(exFileName)
        removeImage(exFileName);
        const imageCreated = saveImage(image);

        const { data: updateBlog, error } = await supabase
            .from(process.env.TABLE_NAME_CATEGORY)
            .update({ name, image: imageCreated, alt, description })
            .eq('id', id)
            .select()

        return updateBlog

    } else {

        const { data: updateBlog, error } = await supabase
            .from(process.env.TABLE_NAME_CATEGORY)
            .update({ name, alt, description })
            .eq('id', id)
            .select()

        return updateBlog;
    }
})