const db = require('../db/mysql.js');
const fs = require('fs');
const { format } = require('date-fns');


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

            const { title, description, alt } = req.body;
            const image = saveImage(req.file);
            const date = new Date();

            const filterCreated = await db.query(
                `INSERT INTO blogs (title, image, description, alt, created_at) VALUES ('${title}', '${image}', '${description}', '${alt}', '${format(date, 'yyyy-MM-dd HH:mm')}')`
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
        const getBlogs = await db.query('SELECT * FROM blogs ORDER BY created_at');
        res.send(getBlogs);
    },

    async single(req, res) {
        const { id } = req.params;
        const getFilterWithId = await db.query(`SELECT * FROM blogs WHERE id='${id}'`);
        res.send(getFilterWithId);
    },

    async update(req, res) {
        const { id } = req.params;
        const { title, description, alt, isChangedImage, exFileName } = req.body;

        if (isChangedImage && req.file) {

            removeImage(exFileName);
            const imageCreated = saveImage(req.file);    

            const updateFilterWithId = await db.query(`UPDATE blogs SET image='${imageCreated}', alt='${alt}', title='${title}', description='${description}' WHERE id='${id}'`);

            res.send(updateFilterWithId);
        } else {
            const updateFilterWithId = await db.query(`UPDATE blogs SET title='${title}', alt='${alt}',description='${description}' WHERE id='${id}'`);

            res.send(updateFilterWithId);
        }
    },

    async delete(req, res) {
        const { id, image } = req.params;
        removeImage(image);
        const deleteFilterWithId = await db.query(`DELETE FROM blogs WHERE id='${id}'`);
        res.send(deleteFilterWithId);
    }

}