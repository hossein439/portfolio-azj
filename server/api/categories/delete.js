import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    try {
        const { id, image } = await readBody(event);
        removeImage(image);

        const { error } = await supabase
            .from('categories')
            .delete()
            .eq('id', id)

        if (error) {
            return error
        } else {
            return 'okay'
        }

    } catch (error) {
        throw error
    }
})