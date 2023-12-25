import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { title, alt, description, image, isChangedImage, exFileName, id } = await readBody(event)

    if (isChangedImage && image) {
        removeImage(exFileName);
        const imageCreated = saveImage(image);

        const { data: updateBlog, error } = await supabase
            .from('blogs')
            .update({ image: imageCreated, title, alt, description})
            .eq('id', id)
            .select()

        return updateBlog

    } else {

        const { data: updateBlog, error } = await supabase
            .from('blogs')
            .update({ title, alt, description})
            .eq('id', id)
            .select()

        return updateBlog;
    }
})