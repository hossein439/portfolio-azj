import supabase from '../../supabase.js'
import { format } from 'date-fns';


export default defineEventHandler(async (event) => {
    const { link, alt, image, isChangedImage, exFileName, id } = await readBody(event)
    const date = new Date()

    if (isChangedImage && image) {
        removeImage(exFileName);
        const imageCreated = saveImage(image);

        const { data: updateCollaboration, error } = await supabase
            .from('collaborations')
            .update({ link, image: imageCreated, alt, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateCollaboration

    } else {

        const { data: updateCollaboration, error } = await supabase
            .from('collaborations')
            .update({ link, alt, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateCollaboration;
    }
})