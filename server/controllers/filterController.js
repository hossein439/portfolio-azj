const db = require('../db/mysql.js');
const fs = require('fs');


module.exports = {

    async create(req, res) {
        try {

            const { link, feature, category } = req.body;
            const extention = req.file.mimetype.split('/')[1];
            const filename = req.file.filename;
            
            fs.rename(req.file.path, `./uploads/${filename}.${extention}`, (err) => {
                console.log('err', err)
            });

            const image = `${filename}.${extention}`;

            const filterCreated = await db.query(
                `INSERT INTO filters (image, url, feature, category) VALUES ('${image}', '${link}', '${feature}', '${category}')`
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
        const getFilters = await db.query('SELECT * FROM filters');
        res.send(getFilters);
    },

    async single(req, res) {
        const { id } = req.params;
        const getCollaborationWithId = await db.query(`SELECT * FROM filters WHERE id='${id}'`);
        res.send(getCollaborationWithId);
    },

    async update(req, res) {
        const { id } = req.params;
        const { link, isChangedImage, exFileName } = req.body;

        if (isChangedImage && req.file) {

            removeImage(exFileName);
            const imageCreated = saveImage(req.file);    

            const updateCollaborationWithId = await db.query(`UPDATE filters SET image='${imageCreated}', link='${link}' WHERE id='${id}'`);

            res.send(updateCollaborationWithId);
        } else {
            const updateCollaborationWithId = await db.query(`UPDATE filters SET link='${link}' WHERE id='${id}'`);

            res.send(updateCollaborationWithId);
        }

    },

    async delete(req, res) {
        const { id, image } = req.params;
        removeImage(image);
        const deleteCollaborationWithId = await db.query(`DELETE FROM collaborations WHERE id='${id}'`);
        res.send(deleteCollaborationWithId);
    }

}