const jwt = require('jsonwebtoken');
const { query } = require('../db/mysql.js');

async function generateAuthToken(id) {
    try {
        const token = jwt.sign({ id: id.toString() }, 'nodemevnstack');
        await query(`UPDATE users SET token='${token}' WHERE id='${id}'`);
        return token;

    } catch (e) {
        throw new Error('User Not Found')
    }
}

module.exports = {
    generateAuthToken
}