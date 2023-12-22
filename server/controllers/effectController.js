const db = require('../db/mysql.js');
const fs = require('fs');
const { format } = require('date-fns');
const supabase = require('../supabase.js')


const nameOfTable = 'effects'

const saveImage = (file, mediaType) => {
    if (mediaType === 'gif') {
        const filename = file.filename;
        fs.rename(file.path, `./uploads/${filename}.gif`, (err) => {
            console.log('err', err)
        });

        const gif = `${filename}.gif`;

        return gif;
    } else {
        const filename = file.filename;
        fs.rename(file.path, `./uploads/${filename}.jpg`, (err) => {
            console.log('err', err)
        });

        const image = `${filename}.jpg`;

        return image;
    }
}


const removeImage = (file) => {
    fs.unlink('./uploads/' + file, (err) => {
        console.log(err);
        if (err && err.code == 'ENOENT') {
            console.info("File doesn't exist, won't remove it.");
        } else if (err) {
            console.error("Error occurred while trying to remove file");
        } else {
            console.info(`removed`);
        }
    });
}
let counter = 0;
module.exports = {

    async create(req, res) {
        try {
            const { name, link, alt, categoryId } = req.body;
            const image = saveImage(req.files.image[0], 'image');
            const gif = saveImage(req.files.gif[0], 'gif');
            const date = new Date();

            // const filterCreated = await db.query(
            //     `INSERT INTO effects (name, image, link, alt, category_id, gif, created_at) VALUES ('${name}', '${image}', '${link}', '${alt}', '${categoryId}', '${gif}', '${format(date, 'yyyy-MM-dd HH:mm')}')`
            // );


            const { data: effectCreated, error } = await supabase
                .from(nameOfTable)
                .insert([
                    { name, image, link, alt, category_id: categoryId, gif, created_at: format(date, 'yyyy-MM-dd HH:mm') },
                ])
                .select()

            console.log(error)


            if (effectCreated) {
                res.send(effectCreated);
            } else {
                res.status(404).send('not found');
            }

        } catch (err) {
            res.status(404).send(err);
        }
    },


    async read(req, res) {
        const { offset = 0, limit = 6 } = req.query;

        // const getEffects = await db.query(`SELECT effects.id, effects.name, effects.image, effects.alt, effects.link, effects.gif, effects.category_id, categories.name AS categoryName FROM effects CROSS JOIN categories WHERE effects.category_id = categories.id ORDER BY effects.created_at DESC LIMIT ${offset}, ${limit}`)

        // const query = `effects(id, name, image, alt, link, gif, category_id, categories(name))`
        //     .eq('category_id', 'categories.id')
        //     .order('created_at', { ascending: false })
        //     .range(offset, offset + limit - 1);


        // 'effects(id, name, image, alt, link, gif, category_id, categories(name))'
        let { data: getEffects, error } = await supabase
            .from(nameOfTable)
            .select(`id, name, image, alt, link, gif, category_id, categories(name)`)
            .order('created_at', { ascending: false })
            .range(offset, offset + limit - 1);

        res.send(getEffects);
    },

    async readAll(req, res) {
        // const getEffects = await db.query(`SELECT effects.id, effects.name, effects.image, effects.alt, effects.link, effects.gif, effects.category_id, categories.name AS categoryName FROM effects CROSS JOIN categories WHERE effects.category_id = categories.id ORDER BY effects.created_at DESC`)

        let { data: getEffects, error } = await supabase
            .from(nameOfTable)
            .select(`id, name, image, alt, link, gif, category_id, categories(name)`)
            .order('created_at', { ascending: false })

        res.send(getEffects);
    },

    async single(req, res) {
        const { id } = req.params;

        // const getCollaborationWithId = await db.query(`SELECT effects.id, effects.name, effects.image, effects.alt, effects.link, effects.gif, effects.category_id, categories.name AS categoryName FROM effects CROSS JOIN categories WHERE effects.category_id = categories.id AND effects.id ='${id}'`);

        let { data: getEffect, error } = await supabase
            .from(nameOfTable)
            .select(`id, name, image, alt, link, gif, category_id, categories(name)`)
            .eq('id', id)

        res.send(getEffect);
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, link, alt, categoryId, isChangedImg, isChangedGif, exFilenameImg, exFilenameGif } = req.body;
        console.log(req.body)

        if (isChangedImg && ('image' in req.files) && !('gif' in req.files)) {

            removeImage(exFilenameImg);
            const imageCreated = saveImage(req.files.image[0]);

            // const updateEffectNewImage = await db.query(`UPDATE effects SET name='${name}', image='${imageCreated}', link='${link}', alt='${alt}', category_id='${categoryId}' WHERE id='${id}'`);

            const { data: updateEffectNewImage, error } = await supabase
                .from(nameOfTable)
                .update({ name, image: imageCreated, link, alt, category_id: categoryId })
                .eq('id', id)
                .select()



            res.send(updateEffectNewImage);
            return;
        }

        if (isChangedGif && ('gif' in req.files) && !('image' in req.files)) {

            removeImage(exFilenameGif);
            const gifCreated = saveImage(req.files.gif[0]);

            // const updateEffectNewGif = await db.query(`UPDATE effects SET name='${name}', gif='${gifCreated}', link='${link}', alt='${alt}', category_id='${categoryId}' WHERE id='${id}'`);

            const { data: updateEffectNewGif, error } = await supabase
                .from(nameOfTable)
                .update({ name, gif: gifCreated, link, alt, category_id: categoryId })
                .eq('id', id)
                .select()

            res.send(updateEffectNewGif);
            return;
        }

        if (isChangedGif && isChangedImg && Object.keys(req.files).length) {

            removeImage(exFilenameGif);
            removeImage(exFilenameImg);

            const gifCreated = saveImage(req.files.gif[0]);
            const imageCreated = saveImage(req.files.image[0]);

            // const updateEffectBoth = await db.query(`UPDATE effects SET name='${name}', gif='${gifCreated}', image='${imageCreated}', link='${link}', alt='${alt}', category_id='${categoryId}' WHERE id='${id}'`);

            const { data: updateEffectBoth, error } = await supabase
                .from(nameOfTable)
                .update({ name, gif: gifCreated, image: imageCreated, link, alt, category_id: categoryId })
                .eq('id', id)
                .select()


            res.send(updateEffectBoth);
            return;
        }

        // const updateCollaborationWithId = await db.query(`UPDATE effects SET name='${name}', link='${link}', alt='${alt}', category_id='${categoryId}' WHERE id='${id}'`);

        const { data: updateEffect, error } = await supabase
            .from(nameOfTable)
            .update({ name, link, alt, category_id: categoryId })
            .eq('id', id)
            .select()

        res.send(updateEffect);

    },

    async delete(req, res) {
        const { id, image, gif } = req.params;

        removeImage(image);
        removeImage(gif);

        // const deleteCollaborationWithId = await db.query(`DELETE FROM effects WHERE id='${id}'`);

        const { error } = await supabase
            .from(nameOfTable)
            .delete()
            .eq('id', id)

        if (error) {
            res.status(400).send(`${nameOfTable} not deleted`);
        } else {
            res.send('okay');
        }

    }

}