import Server from "./src/servers/config.js";
import router from "./src/routers/index.routes.js";


const server = new Server();

//Agregar las rutas
//http://localhost:3000/api/colores
server.app.use('/api', router)

server.listen();