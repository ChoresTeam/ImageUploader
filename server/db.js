const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "images",
    password: "test",
    port:5432,
})

module.exports = pool;