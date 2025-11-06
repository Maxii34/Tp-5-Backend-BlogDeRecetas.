import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validarReceta = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre de la receta es obligatorio")
    .isLength({ min: 3, max: 50 })
    .withMessage(
      "El nombre de la receta debe contener entre 3 y 50 caracteres"
    ),
  body("imagen")
    .notEmpty()
    .withMessage("La imagen de la receta es obligatoria")
    .matches(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i)
    .withMessage("La imagen deve cumplir con el formato de una url de imagenes, terminada en algunos de los siquientes valores: png|jpg|jpeg|gif|webp"),
  body("ingredientes")
    .notEmpty()
    .withMessage("Los ingredientes de la receta son obligatorios")
    .isLength({ min: 10, max: 500 })
    .withMessage(
      "Los ingredientes de la receta deben contener entre 10 y 500 caracteres"
    ),
  body("preparacion")
    .notEmpty()
    .withMessage("La preparación de la receta es obligatoria")
    .isLength({ min: 10, max: 1000 })
    .withMessage(
      "La preparación de la receta debe contener entre 10 y 1000 caracteres"
    ),
  body("dietType")
    .notEmpty()
    .withMessage("El tipo de dieta de la receta es obligatorio")
    .isIn(["Normal", "Sin tac"])
    .withMessage("El tipo de dieta de la receta debe ser 'Normal' o 'Sin tac'"),
  body("categoria")
    .notEmpty()
    .withMessage("La categoría de la receta es obligatoria")
    .isIn([
      "Alfajores",
      "Budin",
      "Muffins",
      "Tortas y tartas",
      "Postres",
      "Para el te",
      "Galletas",
      "Otras recetas",
    ])
    .withMessage(
      "La categoría de la receta debe ser una de las siguientes: ['Alfajores', 'Budin', 'Muffins', 'Tortas y tartas', 'Postres', 'Para el te', 'Galletas', 'Otras recetas' ]"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validarReceta;
