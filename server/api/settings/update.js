import { format } from 'date-fns';
import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { alt, text, image, meta, isChangedImage, exFileName, id } = await readBody(event)
    const date = new Date();

    if (isChangedImage && image) {
        removeImage(exFileName);
        const imageCreated = saveImage(image);

        const data = {
            text,
            alt,
            image: imageCreated
        }

        const { data: updateSetting, error } = await supabase
            .from('settings')
            .update({ data, meta, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateSetting

    } else {
        
        const data = {
            text,
            alt,
            image: exFileName
        }

        const { data: updateSetting, error } = await supabase
            .from('settings')
            .update({ data, meta, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateSetting;
    }
})