import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    try {
        const { alt, image, text, meta } = await readBody(event)
        const imageCreated = saveImage(image);
    
        const data = {
            alt,
            image: imageCreated,
            text
        }
    
        const { data: setting, error } = await supabase
            .from('settings')
            .insert([
                { data, meta },
            ])
            .select()
    
        return { setting }
        
    } catch (error) {
        throw error
    }
})