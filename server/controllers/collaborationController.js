const db = require('../db/mysql.js');
const fs = require('fs');
const { format } = require('date-fns');
const supabase = require('../subbase.js')

const nameOfTable = 'collaborations'

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

            const { link, alt } = req.body;
            const image = saveImage(req.file);
            const date = new Date();

            // const createCollaborations = await db.query(
            //     `INSERT INTO collaborations (image, link, alt, created_at) VALUES ('${image}', '${link}', '${alt}', '${format(date, 'yyyy-MM-dd HH:mm')}')`
            // );


            const { data: createCollaborations, error } = await supabase
                .from(nameOfTable)
                .insert([
                    { image, link, alt, created_at: format(date, 'yyyy-MM-dd HH:mm') },
                ])
                .select()


            if (createCollaborations) {
                res.send(createCollaborations);
            } else {
                res.status(404).send('not found');
            }

        } catch (err) {
            res.status(404).send(err);
        }
    },

    async read(req, res) {
        // const getAllCollaborations = await db.query('SELECT * FROM collaborations ORDER BY created_at DESC');
        // res.send(getAllCollaborations);

        let { data: readAllCollaborations, error } = await supabase
            .from(nameOfTable)
            .select('*')
            .order('created_at', { ascending: false })

        res.send(readAllCollaborations)
    },

    async single(req, res) {
        const { id } = req.params;
        // const getCollaborationWithId = await db.query(`SELECT * FROM collaborations WHERE id='${id}'`);
        // res.send(getCollaborationWithId);

        let { data: singleCollaborations, error } = await supabase
            .from(nameOfTable)
            .select('*')
            .eq('id', id)

        res.send(singleCollaborations)
    },

    async update(req, res) {
        const { id } = req.params;
        const { link, isChangedImage, exFileName, alt } = req.body;

        if (isChangedImage && req.file) {

            removeImage(exFileName);
            const imageCreated = saveImage(req.file);

            // const updateCollaborationWithId = await db.query(`UPDATE collaborations SET image='${imageCreated}', link='${link}' WHERE id='${id}'`);


            const { data: updateCollaborationWithId, error } = await supabase
                .from(nameOfTable)
                .update({ image: imageCreated, link, alt })
                .eq('id', id)
                .select()


            res.send(updateCollaborationWithId);
        } else {
            // const updateCollaborationWithId = await db.query(`UPDATE collaborations SET link='${link}' WHERE id='${id}'`);

            const { data: updateCollaborationWithId, error } = await supabase
                .from(nameOfTable)
                .update({ link, alt })
                .eq('id', id)
                .select()

            res.send(updateCollaborationWithId);
        }

    },

    async delete(req, res) {
        const { id, image } = req.params;
        removeImage(image);
        // const deleteCollaborationWithId = await db.query(`DELETE FROM collaborations WHERE id='${id}'`);

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