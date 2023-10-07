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
    }

}