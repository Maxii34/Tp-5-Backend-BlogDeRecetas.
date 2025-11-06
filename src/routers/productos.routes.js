import { Router } from "express";
import { crearRecetas, listarRecetas, borrarRecetas, editarRecetas } from "../controllers/producto.controllers.js";


/*Get, Post, Path, Put, Delete*/
//Router() se guarda en router.
const router = Router();

router.route('/').post(crearRecetas).get(listarRecetas);
router.route('/:id').delete(borrarRecetas).put(editarRecetas);




export default router;