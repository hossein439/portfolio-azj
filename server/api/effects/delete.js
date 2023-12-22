import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { id, image, gif } = await readBody(event);
    removeImage(image);
    removeImage(gif);

    const { error } = await supabase
        .from(process.env.TABLE_NAME_EFFECT)
        .delete()
        .eq('id', id)

    if (error) {
        return error
    } else {
        return 'okay'
    }
})