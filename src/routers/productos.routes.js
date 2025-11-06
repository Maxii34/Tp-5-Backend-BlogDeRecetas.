import { Router } from "express";
import { crearRecetas, listarRecetas, borrarRecetas, editarRecetas, obtenerRecetas } from "../controllers/producto.controllers.js";
import validarReceta from "../middlewares/validacionProductos.js";


/*Get, Post, Path, Put, Delete*/
//Router() se guarda en router.
const router = Router();

router.route('/').post(validarReceta,crearRecetas).get(listarRecetas);
router.route('/:id').delete(borrarRecetas).put(editarRecetas).get(obtenerRecetas);





export default router;