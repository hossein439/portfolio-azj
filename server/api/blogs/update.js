import supabase from '../../supabase.js'
import removeImage from '../../utils/removeImage.js';
import saveImage from '../../utils/saveImage.js';

const nameOfTable = 'blogs';

export default defineEventHandler(async (event) => {
    const { title, alt, description, image, isChangedImage, exFileName, id } = await readBody(event)

    if (isChangedImage && image) {
        console.log(exFileName)
        removeImage(exFileName);
        const imageCreated = saveImage(image);

        const { data: updateBlog, error } = await supabase
            .from(nameOfTable)
            .update({ image: imageCreated, title, alt, description })
            .eq('id', id)
            .select()

        return updateBlog

    } else {

        const { data: updateBlog, error } = await supabase
            .from(nameOfTable)
            .update({ title, alt, description })
            .eq('id', id)
            .select()

        return updateBlog;
    }
})