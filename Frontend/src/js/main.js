const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductos(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "tarjeta-producto";
        nuevoProducto.innerHTML = `
            <img src=${producto.URLImagen}>
            <h3>${producto.IDProducto}</h3>
            <h3>${producto.IDProducto}</h3>
            <p>${producto.descripcion}</p>
            <p>${producto.rubro}</p>
            <p>${producto.precio}</p>
        `
        contenedorTarjetas.appendChild(nuevoProducto);
    });
}

crearTarjetasProductos(productos);