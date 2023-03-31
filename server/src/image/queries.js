const getImages = "SELECT * FROM images";
const getImageById = "SELECT * FROM images WHERE id = $1";
const checkUrlExists = "SELECT i FROM images i WHERE i.url = $1";
const addImage = "INSERT INTO images (name, url, date) VALUES ($1, $2, $3)"
const deleteImage = "DELETE FROM images WHERE id = $1";
const updateImage = "UPDATE images SET name = $1 WHERE id = $2";

module.exports = {
    getImages,
    getImageById,
    checkUrlExists,
    addImage,
    deleteImage,
    updateImage,
}