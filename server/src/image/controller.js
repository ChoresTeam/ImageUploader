const pool = require('../../db');
const queries = require('./queries');

// get all the images
const getImages = (req, res) => {
    pool.query(queries.getImages, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

// get a specific image
const getImageById = (req, res) => {
        // Get the ID from the request
    const id = parseInt(req.params.id);
    pool.query(queries.getImageById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


// add an image
const addImage = (req, res) => {
    const { name, url, date } = req.body;
    // check if url exists
    pool.query(queries.checkUrlExists, [url], (error, results) => {
        if (results.rows.length) {
            res.send("This image already exists.")
        }
        // add student to db
        pool.query(queries.addImage, [name, url, date], (error, results) => {
            if (error) throw error;
            res.status(201).send("Image added Successfully!")
            console.log("Image added Successfully!")
        })
    })
}

// delete an image
const deleteImage = (req, res) => {
    // Get the ID from the request
    const id = parseInt(req.params.id);
    pool.query(queries.getImageById, [id], (error, results) => {
        const noImageFound = !results.rows.length;
        if (noImageFound) {
            res.send('Image does not exist in the database, could not remove')
        }

        pool.query(queries.deleteImage, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Image removed successfully.')
        })
    })
}

// update the name of an image
    const updateImage = (req, res) => {
        // Get the ID from the request
        const id = parseInt(req.params.id);
        // We can only update the name of the image
        const { name } = req.body;

        pool.query(queries.getImageById, [id], (error, results) => {
            const noImageFound = !results.rows.length;
            if (noImageFound) {
             res.send('Image does not exist in the database, could not update');
            }
            pool.query(queries.updateImage, [name, id], (error, resultst) => {
                if (error) throw error;
                res.status(200).send("Image updated!")
            });
        });
    };

module.exports = {
    getImages,
    addImage,
    getImageById,
    deleteImage,
    updateImage,
};