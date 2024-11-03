CREATE DATABASE dbComercio;
USE dbComercio;

CREATE TABLE Rubro (
	IDRubro INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    descripcion VARCHAR(80) NOT NULL
);

CREATE TABLE Producto (
	IDProducto INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    descripcion VARCHAR(80) NOT NULL,
    rubro INT NOT NULL,
    precio DECIMAL(15,2),
    URLImagen VARCHAR(120),
    FOREIGN KEY (rubro) REFERENCES Rubro(IDRubro)
);

-- Rubros
INSERT INTO Rubro (descripcion) VALUES ('Muebles');
INSERT INTO Rubro (descripcion) VALUES ('Iluminación');
INSERT INTO Rubro (descripcion) VALUES ('Espejos');

-- Insertar Productos para el rubro "Muebles"
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Sofá de tres plazas', 1, 25999.99, 'url_a_imagen_del_sofa');
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Mesa de centro', 1, 8999.99, 'url_a_imagen_de_la_mesa');

-- Insertar Productos para el rubro "Iluminación"
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Lámpara de pie moderna', 2, 4999.99, 'url_a_imagen_de_la_lampara');
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Aplique de pared', 2, 2999.99, 'url_a_imagen_del_aplique');

-- Insertar Productos para el rubro "Espejos"
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Espejo redondo grande', 3, 5999.99, 'url_a_imagen_del_espejo_redondo');
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Espejo decorativo ovalado', 3, 7499.99, 'url_a_imagen_del_espejo_ovalado');