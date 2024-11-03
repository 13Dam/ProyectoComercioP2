const express = require("express");
const morgan = require("morgan");
const database = require("./config/database");
const cors = require("cors");

//configuración inicial
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

app.use(cors());

//Importar y usar ruta
const productoRouter = require("./routes/productos");
app.use("/api/productos", productoRouter);

app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

module.exports = app;