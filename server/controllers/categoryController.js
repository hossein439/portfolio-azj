const db = require('../db/mysql.js');
const fs = require('fs');
const { format } = require('date-fns');
const supabase = require('../subbase.js')

const nameOfTable = 'categories'

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

            const { name, description, alt } = req.body;
            const image = saveImage(req.file);
            const date = new Date();

            // const blogCreated = await db.query(
            //     `INSERT INTO categories (name, image, description, alt, created_at) VALUES ('${name}', '${image}', '${description}', '${alt}', '${format(date, 'yyyy-MM-dd HH:mm')}')`
            // );

            const { data: categories, error } = await supabase
                .from(nameOfTable)
                .insert([
                    { name, image, description, alt, created_at: format(date, 'yyyy-MM-dd HH:mm') },
                ])
                .select()

            if (categories) {
                res.send(categories);
            } else {
                res.status(404).send('not found');
            }

        } catch (err) {
            res.status(404).send(err);
        }
    },

    async read(req, res) {
        // const getFilters = await db.query('SELECT * FROM categories ORDER BY created_at DESC');

        let { data: categories, error } = await supabase
            .from(nameOfTable)
            .select('*')
            .order('created_at', { ascending: false })

        res.send(categories);
    },

    async single(req, res) {
        const { id } = req.params;

        // const getFilterWithId = await db.query(`SELECT * FROM categories WHERE id='${id}'`);

        let { data: categories, error } = await supabase
            .from(nameOfTable)
            .select('*')
            .eq('id', id)


        res.send(categories);
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, description, alt, isChangedImage, exFileName } = req.body;

        if (isChangedImage && req.file) {

            removeImage(exFileName);
            const imageCreated = saveImage(req.file);

            // const updateFilterWithId = await db.query(`UPDATE categories SET name='${name}', image='${imageCreated}', description='${description}', alt='${alt}' WHERE id='${id}'`);

            const { data: updateCategory, error } = await supabase
                .from(nameOfTable)
                .update({ name, image: imageCreated, description, alt })
                .eq('id', id)
                .select()


            res.send(updateCategory);
        } else {

            // const updateFilterWithId = await db.query(`UPDATE categories SET name='${name}', description='${description}', alt='${alt}' WHERE id='${id}'`);

            const { data: updateCategory, error } = await supabase
                .from(nameOfTable)
                .update({ name, description, alt })
                .eq('id', id)
                .select()

            res.send(updateCategory);
        }

    },

    async delete(req, res) {
        const { id, image } = req.params;
        removeImage(image);

        // const deleteFilterWithId = await db.query(`DELETE FROM categories WHERE id='${id}'`);

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