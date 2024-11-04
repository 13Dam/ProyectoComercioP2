const express = require("express");
const router = express.Router();
const rubroController = require("../controllers/rubroController");

//Ruta para obtener los rubros
router.get('/', rubroController.getRubros);

module.exports = router;