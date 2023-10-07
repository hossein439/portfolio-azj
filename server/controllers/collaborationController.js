const db = require('../db/mysql.js');
const fs = require('fs');


module.exports = {

    async create(req, res) {
        try {

            const { link } = req.body;
            const filename = req.file.filename;
            fs.rename(req.file.path, `./uploads/${filename}.jpg`, (err) => {
                console.log('err', err)
            });

            const image = `${filename}.jpg`;

            const filterCreated = await db.query(
                `INSERT INTO collaborations (image, url) VALUES ('${image}', '${link}')`
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
        const getFilters = await db.query('SELECT * FROM collaborations');
        res.send(getFilters);
    }

}