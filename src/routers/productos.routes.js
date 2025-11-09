import { Router } from "express";
import {
  crearRecetas,
  listarRecetas,
  borrarRecetas,
  editarRecetas,
  obtenerRecetas,
} from "../controllers/producto.controllers.js";
import validarReceta from "../middlewares/validacionProductos.js";
import validacionIdProductos from "../middlewares/validacionIdProductos.js";
import verificarJWT from "../middlewares/validarToken.js";

/*Get, Post, Path, Put, Delete*/
//Router() se guarda en router.
const router = Router();

router.route("/").post([verificarJWT,validarReceta], crearRecetas).get(listarRecetas);
router
  .route("/:id")
  .delete(validacionIdProductos,borrarRecetas)
  .put([validacionIdProductos,validarReceta],editarRecetas)
  .get(validacionIdProductos, obtenerRecetas);

export default router;
