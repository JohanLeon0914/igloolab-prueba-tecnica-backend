CREATE DATABASE IF NOT EXISTS nombre_de_tu_base_de_datos;

USE nombre_de_tu_base_de_datos;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image VARCHAR(500) NOT NULL
);

INSERT INTO products (name, description, price, image) VALUES
('Pantalón largo', 'Un hermoso pantalón para hombre', 799.99, 'https://wiseman.vtexassets.com/arquivos/ids/166627-1600-auto?v=638381933231500000&width=1600&height=auto&aspect=true'),
('Camisa gris', 'Una hermosa camisda gris hecha de algondón', 1299.99, 'https://wiseman.vtexassets.com/arquivos/ids/162037-1600-auto?v=638374778884770000&width=1600&height=auto&aspect=true'),
('Camisa de rayas', 'Hermosa camisa de rayas con diseño profesional', 899.99, 'https://wiseman.vtexassets.com/arquivos/ids/158425-1600-auto?v=638374763185700000&width=1600&height=auto&aspect=true'),
('Chaqueta de botones', 'Increible chaqueta de botones', 499.99, 'https://wiseman.vtexassets.com/arquivos/ids/200534-1600-auto?v=638670659094370000&width=1600&height=auto&aspect=true'),
('Chaqueta azul marino', 'Gran chaqueta color azul marino para hombre', 149.99, 'https://wiseman.vtexassets.com/arquivos/ids/195186-1600-auto?v=638533118853800000&width=1600&height=auto&aspect=true'),
('Buzo negro Lewis', 'Hermoso buzo color negro marca Lewis', 199.99, 'https://wiseman.vtexassets.com/arquivos/ids/195327-1600-auto?v=638533775748570000&width=1600&height=auto&aspect=true');