import supabase from '../../supabase.js'

export default defineEventHandler(async (event) => {
    try {
        const { id, image, gif } = await readBody(event);
        removeImage(image);
        removeImage(gif);
    
        const { error } = await supabase
            .from('effects')
            .delete()
            .eq('id', id)
    
        if (error) {
            return error
        } else {
            return 'okay'
        }
        
    } catch (error) {
        throw error
    }
})