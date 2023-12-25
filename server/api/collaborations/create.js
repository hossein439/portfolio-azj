import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { link, alt, image } = await readBody(event)
    const imageCreated = saveImage(image);

    const { data: collaboration, error } = await supabase
        .from('collaborations')
        .insert([
            { link, image: imageCreated, alt },
        ])
        .select()

    return { collaboration }
})