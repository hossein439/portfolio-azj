import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    const { alt, description, image, name } = await readBody(event)
    const imageCreated = saveImage(image);

    const { data: categoryCreated, error } = await supabase
        .from('categories')
        .insert([
            { name, image: imageCreated, description, alt },
        ])
        .select()

    return { categoryCreated }
})