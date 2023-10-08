const db = require('../db/mysql.js');
const fs = require('fs');

const saveImage = (file) => {
    const filename = file.filename;
    fs.rename(file.path, `./uploads/${filename}.jpg`, (err) => {
        console.log('err', err)
    });

    const image = `${filename}.jpg`;

    return image;
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

            const { link, feature, category } = req.body;
            const image = saveImage(req.file);

            const filterCreated = await db.query(
                `INSERT INTO filters (image, link, feature, category) VALUES ('${image}', '${link}', '${feature}', '${category}')`
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
        const getFilterWithId = await db.query(`SELECT * FROM filters WHERE id='${id}'`);
        res.send(getFilterWithId);
    },

    async update(req, res) {
        const { id } = req.params;
        const { link, feature, category, isChangedImage, exFileName } = req.body;

        if (isChangedImage && req.file) {

            removeImage(exFileName);
            const imageCreated = saveImage(req.file);    

            const updateFilterWithId = await db.query(`UPDATE filters SET image='${imageCreated}', link='${link}', feature='${feature}', category='${category}' WHERE id='${id}'`);

            res.send(updateFilterWithId);
        } else {
            const updateFilterWithId = await db.query(`UPDATE filters SET link='${link}', feature='${feature}', category='${category}' WHERE id='${id}'`);

            res.send(updateFilterWithId);
        }

    },

    async delete(req, res) {
        const { id, image } = req.params;
        console.log(id);
        removeImage(image);
        const deleteFilterWithId = await db.query(`DELETE FROM filters WHERE id='${id}'`);
        res.send(deleteFilterWithId);
    }

}