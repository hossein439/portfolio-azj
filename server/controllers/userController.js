const db = require('../db/mysql.js');
const { generateAuthToken } = require('../utils/generateAuthToken.js');

module.exports = {

    async login(req, res) {
        try {
            console.log('login')
            const { email, password } = req.body;

            const rows = await db.query(
                `SELECT * FROM users WHERE email='${email}' AND password='${password}'`
            );
            if (rows.length) {
                const { id } = rows[0];
                const token = await generateAuthToken(id);
                res.send(
                    {
                        user: rows,
                        token: token
                    }
                )
            } else {
                res.status(404).send('not found');
            }

        } catch (err) {
            res.send(err);
        }
    },

}