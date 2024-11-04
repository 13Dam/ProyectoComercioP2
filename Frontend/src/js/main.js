const contenedorTarjetas = document.getElementById("productos-container");
const selectRubro = document.getElementById("rubro");
const buscarBtn = document.getElementById("buscar-btn");
const productoDescripInput = document.getElementById("producto-descrip");

//Función para cargar los rubros en el select
async function cargarRubros() {
    const rubros = await getRubros();
    rubros.forEach(rubro => {
        const option = document.createElement("option");
        option.value = rubro.IDRubro; //ID rubro
        option.textContent = rubro.descripcion; //Descripción rubro
        selectRubro.appendChild(option);
    });
}
cargarRubros();

//Función para mostrar productos filtrados por rubro y/o descripción
async function mostrarProductosFiltrados() {
    const IDRubro = selectRubro.value; //ID del rubro seleccionado
    const productoDescrip = productoDescripInput.value.toLowerCase(); //Descripción ingresada
    let productos = [];

    //Obtener productos según el rubro seleccionado o todos los productos si no hay rubro seleccionado
    if (IDRubro) {
        productos = await getProductosPorRubro(IDRubro);
    } else {
        productos = await getProductos();
    }
    //Filtrar productos según la descripción ingresada
    if (productoDescrip) {
        productos = productos.filter(producto =>
            producto.descripcion.toLowerCase().includes(productoDescrip)
        );
    }

    //Limpiar contenedor de tarjetas y crear las nuevas tarjetas con los productos filtrados
    contenedorTarjetas.innerHTML = '';
    crearTarjetasProductos(productos);
}

//Evento al select de rubro para filtrar productos
selectRubro.addEventListener("change", mostrarProductosFiltrados);

//Evento al botón de búsqueda para filtrar productos por descripción
buscarBtn.addEventListener("click", mostrarProductosFiltrados);

//Función para crear tarjetas de productos
function crearTarjetasProductos(productos) {
    productos.forEach(producto => {
        //Elemento div para la tarjeta
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-md-6", "mb-4", "d-flex", "justify-content-center"); //dos tarjetas por fila y centradas
        
        //Precio se convierte a un número antes de usar .toFixed(2)
        const precio = Number(producto.precio).toFixed(2);

        //Contenido HTML de la tarjeta al div
        tarjeta.innerHTML = `
            <div class="card" style="width: 60%;">
                <img src="${producto.URLImagen || 'path/to/default/image.png'}" class="card-img-top" alt="${producto.descripcion}">
                <div class="card-body">
                    <h5 class="card-title">${producto.descripcion}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID: ${producto.IDProducto}</h6>
                    <p class="card-text">Rubro: ${producto.RubroDescripcion}</p>
                    <p class="card-text">Precio: $${precio}</p>
                </div>
            </div>
        `;
        contenedorTarjetas.appendChild(tarjeta);
    });
}

//Cargar todos los productos al iniciar la página
getProductos().then(productos => {
    crearTarjetasProductos(productos);
});