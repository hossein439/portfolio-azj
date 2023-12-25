import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { alt, text, image, meta, isChangedImage, exFileName, id } = await readBody(event)

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
            .update({ data, meta })
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
            .update({ data, meta })
            .eq('id', id)
            .select()

        return updateSetting;
    }
})