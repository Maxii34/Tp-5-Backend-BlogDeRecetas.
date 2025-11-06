import Producto from "../models/productos.js";


export const crearRecetas = async (req, res) => {
    try {
        console.log(req)
        const nuevaReceta = new Producto(req.body);
         await nuevaReceta.save();
        res.status(201).json({ mensaje: "La receta fue creada exitosamente" })
    } catch (error) {
        console.log(error)
    res.status(500).json({ mensaje: "Error al crear la receta" })
    }
}