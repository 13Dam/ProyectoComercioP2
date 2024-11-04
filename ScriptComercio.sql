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

ALTER TABLE Producto
MODIFY COLUMN URLImagen VARCHAR(150);

-- Insertar Productos para el rubro "Muebles"
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Sofá de tres plazas', 1, 25999.99, 'https://raw.githubusercontent.com/13Dam/ProyectoComercioP2/refs/heads/main/Frontend/assets/Images/Sof%C3%A1-3-plazas-grande.jpg');
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Mesa de centro', 1, 8999.99, 'https://raw.githubusercontent.com/13Dam/ProyectoComercioP2/refs/heads/main/Frontend/assets/Images/156-edit.jpg');

-- Insertar Productos para el rubro "Iluminación"
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Lámpara de pie moderna', 2, 4999.99, 'https://raw.githubusercontent.com/13Dam/ProyectoComercioP2/refs/heads/main/Frontend/assets/Images/lampara-pie-moderna.jpg');
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Aplique de pared', 2, 2999.99, 'https://raw.githubusercontent.com/13Dam/ProyectoComercioP2/refs/heads/main/Frontend/assets/Images/416X4UJ5nXL._AC_SX569_.jpg');

-- Insertar Productos para el rubro "Espejos"
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Espejo redondo grande', 3, 5999.99, 'https://raw.githubusercontent.com/13Dam/ProyectoComercioP2/refs/heads/main/Frontend/assets/Images/espejo-redondo-negro.jpg');
INSERT INTO Producto (descripcion, rubro, precio, URLImagen) 
VALUES ('Espejo decorativo ovalado', 3, 7499.99, 'https://raw.githubusercontent.com/13Dam/ProyectoComercioP2/refs/heads/main/Frontend/assets/Images/espejo-ovalado.jpeg');
