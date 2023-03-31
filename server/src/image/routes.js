const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getImages)
router.post('/', controller.addImage); 
router.get('/:id', controller.getImageById);
router.delete('/:id', controller.deleteImage);
router.put("/:id", controller.updateImage);

module.exports = router;