# Sistema de Gestión de Productos (Backend)

## 📋 Requisitos Previos
- **Node.js v16+**
- **npm v8+**
- **MySQL Server v8+**

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/JohanLeon0914/igloolab-prueba-tecnica-backend
cd igloolab-prueba-tecnica-backend
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar la base de datos MySQL
## Conéctate a MySQL y crea la base de datos manualmente:
```bash
mysql -u [tu_usuario] -p
```
## Luego, ejecuta:
```bash
CREATE DATABASE nombre_de_tu_base_de_datos;
```
## (ejemplo de nombre de la base de datos): store-db
## Ejecutar el script SQL: init-db.sql ubicado en la raiz del proyecto
```bash
mysql -u [tu_usuario] -p nombre_de_tu_base_de_datos < init-db.sql
```

## Insertar datos iniciales (opcional)
```bash
mysql -u [tu_usuario] -p nombre_de_tu_base_de_datos < insert-products.sql
```

## Verificar la base de datos
```bash
mysql -u [tu_usuario] -p nombre_de_tu_base_de_datos
```
## Luego, ejecuta:
```bash
SHOW TABLES;
SELECT * FROM products;
```
### 4. Configurar variables de entorno
## Crear un archivo .env en la raíz del proyecto con la siguiente variable
```bash
DB_NAME=nombre_de_tu_base_de_datos
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
DB_HOST=localhost
PORT=3001
```

### 5. Ejecutar el servidor de desarrollo
```bash
npm run dev
```
## El servidor frontend estará disponible en: http://localhost:3001



