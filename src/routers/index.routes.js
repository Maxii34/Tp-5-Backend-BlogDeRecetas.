import { Router } from "express";
import { crearProducto } from "../controllers/producto.controllers.js";

const router = Router();

//http://localhost:3000/api/productos/
router.route('/productos', crearProducto)

export default router;