import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { name, alt, description, image, isChangedImage, exFileName, id } = await readBody(event)
    try {
        if (isChangedImage && image) {
            removeImage(exFileName);
            const imageCreated = saveImage(image);

            const { data: updateCategory, error } = await supabase
                .from('categories')
                .update({ name, image: imageCreated, alt, description })
                .eq('id', id)
                .select()

            return updateCategory

        } else {

            const { data: updateCategory, error } = await supabase
                .from('categories')
                .update({ name, alt, description })
                .eq('id', id)
                .select()

            return updateCategory;
        }
    } catch (error) {
        throw error
    }
})