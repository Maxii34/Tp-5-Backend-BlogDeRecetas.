import usuario from "../models/usuario.js";

export const crearUsuario = async () => {
  const usuarioNuevo = new usuario(req.body);
  await usuarioNuevo.save();
  res.status(201).json({ mensaje: "El usuario fue creado exitosamente" });
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el usuario" });
  }
};
