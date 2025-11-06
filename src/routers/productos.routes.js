import { Router } from "express";
import { crearRecetas } from "../controllers/producto.controllers.js";


/*Get, Post, Path, Put, Delete*/
//Router() se guarda en router.
const router = Router();

router.route('/').post(crearRecetas)


export default router;