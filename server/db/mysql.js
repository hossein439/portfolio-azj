const mysql = require('mysql2/promise');

const config = {
    db: {
        host: "localhost",
        user: "jimmy",
        password: "Hello_@#$9090",
        database: "portfolio-azj",
        connectTimeout: 60000
    },
    listPerPage: 10,
};


async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results,] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}