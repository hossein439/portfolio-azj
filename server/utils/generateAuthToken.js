const jwt = require('jsonwebtoken');
const { query } = require('../db/mysql.js');

async function generateAuthToken(id) {
    const token = jwt.sign({ id: id.toString() }, 'nodemevnstack');
    await query(`UPDATE users SET token='${token}' WHERE id='${id}'`);
    return token;
}

module.exports = {
    generateAuthToken
}