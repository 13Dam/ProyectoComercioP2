const db = require("../config/database");

//obtener los rubros
exports.getRubros = async (req, res) => {
    try {
        const [rubros] = await db.promise().query('SELECT * FROM Rubro');
        res.json(rubros);
    } catch (error) {
        console.error('Error al obtener los rubros:', error);
        res.status(500).json({ message: 'Error al obtener los rubros' });
    }
};