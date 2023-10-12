const db = require('../db/mysql.js');
const fs = require('fs');
const { format } = require('date-fns');



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

module.exports = {

    async create(req, res) {
        try {
            const { name, link, alt, categoryId } = req.body;
            const image = saveImage(req.files.image[0], 'image');
            const gif = saveImage(req.files.gif[0], 'gif');
            const date = new Date();


            const filterCreated = await db.query(
                `INSERT INTO effects (name, image, link, alt, category_id, gif, created_at) VALUES ('${name}', '${image}', '${link}', '${alt}', '${categoryId}', '${gif}', '${format(date, 'yyyy-MM-dd HH:mm')}')`
            );


            if (filterCreated) {
                res.send(filterCreated);
            } else {
                res.status(404).send('not found');
            }

        } catch (err) {
            res.status(404).send(err);
        }
    },

    async read(req, res) {
        const getEffects = await db.query(`SELECT effects.id, effects.name, effects.image, effects.alt, effects.link, effects.gif, effects.category_id, categories.name AS categoryName FROM effects CROSS JOIN categories WHERE effects.category_id = categories.id ORDER BY effects.created_at`)
        res.send(getEffects);
    },

    async single(req, res) {
        const { id } = req.params;
        const getCollaborationWithId = await db.query(`SELECT effects.id, effects.name, effects.image, effects.alt, effects.link, effects.gif, effects.category_id, categories.name AS categoryName FROM effects CROSS JOIN categories WHERE effects.category_id = categories.id AND effects.id ='${id}'`);
        res.send(getCollaborationWithId);
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, link, alt, categoryId, isChangedImg, isChangedGif, exFilenameImg, exFilenameGif } = req.body;


        if (isChangedImg && ('image' in req.files) && !('gif' in req.files) ) {

            removeImage(exFilenameImg);
            const imageCreated = saveImage(req.files.image[0]);

            const updateCollaborationWithId = await db.query(`UPDATE effects SET name='${name}', image='${imageCreated}', link='${link}', alt='${alt}', category_id='${categoryId}' WHERE id='${id}'`);

            res.send(updateCollaborationWithId);
            return;
        }

        if (isChangedGif && ('gif' in req.files) && !('image' in req.files)) {

            removeImage(exFilenameGif);
            const gifCreated = saveImage(req.files.gif[0]);

            const updateCollaborationWithId = await db.query(`UPDATE effects SET name='${name}', gif='${gifCreated}', link='${link}', alt='${alt}', category_id='${categoryId}' WHERE id='${id}'`);

            res.send(updateCollaborationWithId);
            return;
        }

        if (isChangedGif && isChangedImg && Object.keys(req.files).length) {

            removeImage(exFilenameGif);
            removeImage(exFilenameImg);

            const gifCreated = saveImage(req.files.gif[0]);
            const imageCreated = saveImage(req.files.image[0]);

            const updateCollaborationWithId = await db.query(`UPDATE effects SET name='${name}', gif='${gifCreated}', image='${imageCreated}', link='${link}', alt='${alt}', category_id='${categoryId}' WHERE id='${id}'`);

            res.send(updateCollaborationWithId);
            return;
        }

        const updateCollaborationWithId = await db.query(`UPDATE effects SET name='${name}', link='${link}', alt='${alt}', category_id='${categoryId}' WHERE id='${id}'`);

        res.send(updateCollaborationWithId);

    },

    async delete(req, res) {
        const { id, image, gif } = req.params;

        removeImage(image);
        removeImage(gif);
        
        const deleteCollaborationWithId = await db.query(`DELETE FROM effects WHERE id='${id}'`);

        res.send(deleteCollaborationWithId);
    }

}