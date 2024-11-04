const express = require("express");
const router = express.Router();
const { getProductos, getProductosRubroById } = require("../controllers/productoController");

//Ruta para obtener todos los productos
router.get('/', getProductos);
//Ruta para obtener todos los productos por rubro
router.get('/rubros/:id', getProductosRubroById);

module.exports = router;