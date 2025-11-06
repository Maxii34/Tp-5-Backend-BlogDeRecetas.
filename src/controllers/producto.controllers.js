import Producto from "../models/productos.js";

export const crearRecetas = async (req, res) => {
  try {
    const nuevaReceta = new Producto(req.body);
    await nuevaReceta.save();
    res.status(201).json({ mensaje: "La receta fue creada exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al crear la receta" });
  }
};
export const listarRecetas = async (req, res) => {
  try {
    const recetas = await Producto.find();
    res.status(200).json(recetas);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al crear la receta" });
  }
};
