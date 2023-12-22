import supabase from '../../supabase.js'
import { format } from 'date-fns';


export default defineEventHandler(async (event) => {
    const { id, name, link, alt, categoryId, image, gif, isChangedImg, isChangedGif, exFilenameImg, exFilenameGif } = await readBody(event);
    const date = new Date();

    if (isChangedImg && image && !gif) {

        removeImage(exFilenameImg);
        const imageCreated = saveImage(image);

        const { data: updateEffectNewImage, error } = await supabase
            .from(process.env.TABLE_NAME_EFFECT)
            .update({ name, image: imageCreated, link, alt, category_id: categoryId, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateEffectNewImage;
    }

    if (isChangedGif && gif && !image) {

        removeImage(exFilenameGif);
        const gifCreated = saveImage(gif, 'gif');

        const { data: updateEffectNewGif, error } = await supabase
            .from(process.env.TABLE_NAME_EFFECT)
            .update({ name, gif: gifCreated, link, alt, category_id: categoryId, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateEffectNewGif;
    }

    if (isChangedGif && isChangedImg && image && gif) {

        removeImage(exFilenameGif);
        removeImage(exFilenameImg);

        const gifCreated = saveImage(gif, 'gif');
        const imageCreated = saveImage(image);

        const { data: updateEffectBoth, error } = await supabase
            .from(process.env.TABLE_NAME_EFFECT)
            .update({ name, image: imageCreated, link, alt, gif: gifCreated, category_id: categoryId, created_at: format(date, 'yyyy-MM-dd HH:mm') })
            .eq('id', id)
            .select()

        return updateEffectBoth;
    }

    const { data: updateEffect, error } = await supabase
        .from(process.env.TABLE_NAME_EFFECT)
        .update({ name, link, alt, category_id: categoryId, created_at: format(date, 'yyyy-MM-dd HH:mm') })
        .eq('id', id)
        .select()

    return updateEffect
})