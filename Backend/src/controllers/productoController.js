const db = require("../config/database");

//obtener todos los productos
exports.getProductos = async (req, res) => {
    try {
        const query = `
        SELECT Producto.IDProducto, Producto.descripcion, Producto.precio, Producto.URLImagen, 
               Rubro.IDRubro, Rubro.descripcion AS RubroDescripcion
        FROM Producto
        INNER JOIN Rubro ON Producto.rubro = Rubro.IDRubro
        ORDER BY Producto.IDProducto ASC
      `;
        const [result] = await db.promise().query(query);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};

//obtener productos por rubro
exports.getProductosRubroById = async (req, res) => {
    const idRubro = req.params.id;
    try {
        const query = `
        SELECT Producto.IDProducto, Producto.descripcion, Producto.precio, Producto.URLImagen, 
               Rubro.IDRubro, Rubro.descripcion AS RubroDescripcion
        FROM Producto
        INNER JOIN Rubro ON Producto.rubro = Rubro.IDRubro
        WHERE Rubro.IDRubro = ?
      `;
        const [productos] = await db.promise().query(query, [idRubro]);
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos por rubro:', error);
        res.status(500).json({ message: 'Error al obtener los productos por rubro' });
    }
};