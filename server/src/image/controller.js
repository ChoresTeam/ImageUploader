const pool = require('../../db');
const queries = require('./queries');

const getImages = (req, res) => {
    pool.query(queries.getImages, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getImages,
};