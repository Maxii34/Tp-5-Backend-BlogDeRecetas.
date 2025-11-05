import { Router } from "express";
import { crearProducto } from "../controllers/producto.controllers.js";


/*Get, Post, Path, Put, Delete*/
//Router() se guarda en router.
const router = Router();

router.route('/').post(crearProducto)


export default router;