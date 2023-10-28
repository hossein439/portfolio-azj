const db = require('../db/mysql.js');
const { generateAuthToken } = require('../utils/generateAuthToken.js');

module.exports = {

    async login(req, res) {
        try {

            const  { email, password } = req.body;

            const rows = await db.query(
                `SELECT * FROM users WHERE email='${email}' AND password='${password}'`
            );
            const { id } = rows[0];
            const token = await generateAuthToken(id);

            if(rows.length) {
                // res.cookie('auth_token', token, { secure: false, httpOnly: false }).send({
                //     rows,
                //     token
                // });
                console.log(token);
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