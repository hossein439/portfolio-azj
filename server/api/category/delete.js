import supabase from '../../supabase.js'
import removeImage from '../../utils/removeImage.js';

const nameOfTable = 'blogs';

export default defineEventHandler(async (event) => {
    const { id, image } = await readBody(event);
    removeImage(image);

    const { error } = await supabase
        .from(nameOfTable)
        .delete()
        .eq('id', id)

    if (error) {
        return error
    } else {
        return 'okay'
    }
})