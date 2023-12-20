const db = require('../db/mysql.js');
const fs = require('fs');
const { format } = require('date-fns');
const supabase = require('../subbase.js')


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

            const { alt, text, meta } = req.body;
            const image = saveImage(req.file);
            const date = new Date();

            const data = JSON.stringify({
                image,
                alt,
                text,
            });

            const createSettings = await db.query(
                `INSERT INTO settings (data, meta, created_at) VALUES ('${data}', '${meta}', '${format(date, 'yyyy-MM-dd HH:mm')}')`
            );

            if (createSettings) {
                res.send(createSettings);
            } else {
                res.status(404).send('not found');
            }

        } catch (err) {
            res.status(404).send(err);
        }
    },

    async read(req, res) {
        // const getAllCollaborations = await db.query('SELECT * FROM settings ORDER BY created_at');

        let { data: collaborations, error } = await supabase
            .from('collaborations')
            .select('*')

        // res.send(getAllCollaborations);
        console.log(collaborations);
        res.send(collaborations)
    },

    async single(req, res) {
        const { meta } = req.params;
        const getCollaborationWithId = await db.query(`SELECT * FROM settings WHERE meta='${meta}'`);
        res.send(getCollaborationWithId);
    },

    async update(req, res) {
        const { id } = req.params;
        const { link, isChangedImage, exFileName } = req.body;

        if (isChangedImage && req.file) {

            removeImage(exFileName);
            const imageCreated = saveImage(req.file);

            const updateCollaborationWithId = await db.query(`UPDATE settings SET image='${imageCreated}', link='${link}' WHERE id='${id}'`);

            res.send(updateCollaborationWithId);
        } else {
            const updateCollaborationWithId = await db.query(`UPDATE settings SET link='${link}' WHERE id='${id}'`);

            res.send(updateCollaborationWithId);
        }

    },

    async delete(req, res) {
        const { id, image } = req.params;
        removeImage(image);
        const deleteCollaborationWithId = await db.query(`DELETE FROM settings WHERE id='${id}'`);
        res.send(deleteCollaborationWithId);
    }
}