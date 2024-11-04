async function getProductos() {
    try {
        const response = await axios.get("http://localhost:3000/api/productos");
        const productos = response.data;
        return productos;
    } catch (error) {
        console.error('Error al cargar los productos', error);
        alert('Hubo un error al cargar los productos');
    }
}

async function getRubros() {
    try {
        const response = await axios.get("http://localhost:3000/api/rubros");
        const rubros = response.data;
        return rubros;
    } catch (error) {
        console.error('Error al cargar los rubros', error);
        alert('Hubo un error al cargar los rubros');
    }
}

async function getProductosPorRubro(IDRubro) {
    try {
        const response = await axios.get(`http://localhost:3000/api/productos/rubros/${IDRubro}`);
        const productos = response.data;
        return productos;
    } catch (error) {
        console.error('Error al cargar productos por rubro', error);
        alert('Hubo un error al cargar productos por rubro');
    }
}