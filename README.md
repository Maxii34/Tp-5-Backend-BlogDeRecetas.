# Blog de Recetas API

API para un blog de recetas, que permite a los usuarios crear, ver, editar y eliminar recetas. También incluye autenticación de usuarios.

## Autor

- **Maximiliano Ordoñez**

## Tecnologías Utilizadas

### Backend

-   <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />: Entorno de ejecución para JavaScript.
-   <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />: Framework para construir aplicaciones web y APIs.
-   <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />: Modelado de datos de MongoDB para Node.js.
-   <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />: Base de datos NoSQL.
-   <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JSON Web Token" />: Para la generación de tokens de acceso para la autenticación.
-   <img src="https://img.shields.io/badge/bcrypt-62A8E5?style=for-the-badge&logo=bcrypt&logoColor=white" alt="bcrypt" />: Librería para el hasheo de contraseñas.
-   <img src="https://img.shields.io/badge/express--validator-68A0D8?style=for-the-badge" alt="express-validator" />: Middleware para la validación de datos en Express.
-   <img src="https://img.shields.io/badge/CORS-000000?style=for-the-badge&logo=cors&logoColor=white" alt="cors" />: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
-   <img src="https://img.shields.io/badge/Morgan-ff69b4?style=for-the-badge" alt="morgan" />: Middleware para el logueo de peticiones HTTP.

### Despliegue

-   <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />: Plataforma para el despliegue de aplicaciones web.

### Repositorio Front.

- [Ling Repositorio Front](https://github.com/Maxii34/Tp-06-Blog-de-Recetas)

## Endpoints de la API

### Usuarios

-   `POST /api/usuarios`: Crear un nuevo usuario.
-   `GET /api/usuarios`: Listar todos los usuarios (ruta de prueba, podría ser eliminada en producción).
-   `POST /api/usuarios/login`: Iniciar sesión.

### Recetas (Productos)

-   `POST /api/recetas`: Crear una nueva receta (requiere token de autenticación).
-   `GET /api/recetas`: Listar todas las recetas.
-   `GET /api/recetas/:id`: Obtener una receta por su ID.
-   `PUT /api/recetas/:id`: Editar una receta por su ID (requiere token de autenticación).
-   `DELETE /api/recetas/:id`: Eliminar una receta por su ID (requiere token de autenticación).

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de producción.

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo con recarga automática usando `node --watch`. Requiere un archivo `.env` con las variables de entorno.

## Variables de Entorno

Para ejecutar este proyecto, necesitarás agregar las siguientes variables de entorno a tu archivo `.env`:

`MONGO_URI`: Tu URI de conexión a MongoDB.
`JWT_SECRET`: Tu clave secreta para firmar los tokens JWT.

## Instalación

1.  Clona el repositorio:
    ```sh
    git clone <url-del-repositorio>
    ```
2.  Instala las dependencias:
    ```sh
    npm install
    ```
3.  Crea un archivo `.env` en la raíz del proyecto y añade las variables de entorno necesarias.
4.  Inicia el servidor de desarrollo:
    ```sh
    npm run dev
    ```
