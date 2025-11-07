import { param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionIdProductos = [
  param("id").isMongoId().withMessage('la id no corresponde con el formato de mongodb')
  ,
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionIdProductos;
