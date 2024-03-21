const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getPeticiones);
router.post("/", controller.addPeticiones);
router.get("/:id", controller.getPeticionesById);


module.exports = router;