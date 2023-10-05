const db = require('../db/mysql.js');

module.exports = {

    async login(req, res) {
        try {

            const  { email, password } = req.body;

            const rows = await db.query(
                `SELECT * FROM users WHERE email='${email}' AND password='${password}'`
            );

            if(rows.length) {
                res.send(rows);
            } else {
                res.status(404).send('not found');
            }
            // res.cookie('auth_token', token, { secure: false, httpOnly: false }).send({
            //     user,
            //     token
            // });

        } catch (err) {
            res.status(404).send(err);
        }
    },

}