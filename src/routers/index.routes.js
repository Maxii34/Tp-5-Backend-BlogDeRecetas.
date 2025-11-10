import { Router } from "express";
import routerProductos from "./productos.routes.js";
import routerUsuarios from "./usuarios.routes.js";

const router = Router();

//http://localhost:3000/api/productos
router.use('/productos', routerProductos);
//http://localhost:3000/api/usuarios
router.use('/usuarios', routerUsuarios);


export default router;