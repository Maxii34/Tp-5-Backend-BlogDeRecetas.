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
    res.status(500).json({ mensaje: "Error al listar las receta" });
  }
};

export const borrarRecetas = async (req, res) => {
  try {
    console.log(req.params.id);
    const recetaBuscada = await Producto.findById(req.params.id);
    if (!recetaBuscada) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "La receta fue borrada exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al borrar la receta" });
  }
};

export const editarRecetas = async (req, res) => {
  try {
    console.log(req.params.id);
    const recetaActualizada = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!recetaActualizada) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.status(200).json({ mensaje: "La receta fue actualizada exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al editar la receta" });
  }
};

export const obtenerRecetas = async (req, res) => {
  try {
    console.log(req.params.id);
    const recetaObtenida = await Producto.findById(req.params.id);
    if (!recetaObtenida) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.status(200).json(recetaObtenida);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al obtener la receta" });
  }
};
