import supabase from '../../supabase.js'


export default defineEventHandler(async (event) => {
    try {
        const { link, alt, image, isChangedImage, exFileName, id } = await readBody(event)

        if (isChangedImage && image) {
            removeImage(exFileName);
            const imageCreated = saveImage(image);

            const { data: updateCollaboration, error } = await supabase
                .from('collaborations')
                .update({ link, image: imageCreated, alt })
                .eq('id', id)
                .select()

            return updateCollaboration

        } else {

            const { data: updateCollaboration, error } = await supabase
                .from('collaborations')
                .update({ link, alt })
                .eq('id', id)
                .select()

            return updateCollaboration;
        }

    } catch (error) {
        throw error
    }
})