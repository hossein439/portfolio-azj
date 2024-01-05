import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    try {
        const { title, alt, description, image } = await readBody(event)
        const imageCreated = saveImage(image);
    
        const { data: blogCreated, error } = await supabase
            .from('blogs')
            .insert([
                { title, image: imageCreated, description, alt },
            ])
            .select()
    
        return { blogCreated }
        
    } catch (error) {
        throw error
    }
})