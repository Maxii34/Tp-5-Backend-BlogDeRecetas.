import { Router } from "express";
import routerProductos from "./productos.routes.js";

const router = Router();

//http://localhost:3000/api/productos
router.use('/productos', routerProductos);


export default router;