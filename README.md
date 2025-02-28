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
## Edita el script init-db.sql ubicado en la raíz del proyecto y reemplaza nombre_de_tu_base_de_datos por un nombre de tu preferencia. (store-db) por ejemplo
## Ejecuta el siguiente comando:
```bash
mysql -u [tu_usuario] -p
```
## Digita la contraseña de tu usuario y a continuación copia y pega el contenido de init-db.sql en la consola.
## Tambien puedes ejecutar el script init-db.sql directamente en tu MySQL Workbench

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



