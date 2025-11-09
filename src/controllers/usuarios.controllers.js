import usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  const saltos = bcrypt.genSaltSync(10);
  const passwordEncriptada = bcrypt.hashSync(req.body.password, saltos);
  req.body.password = passwordEncriptada;
  const usuarioNuevo = new usuario(req.body);
  await usuarioNuevo.save();
  res.status(201).json({ mensaje: "El usuario fue creado exitosamente" });
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al crear el usuario" });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al listar el usuario" });
  }
};
