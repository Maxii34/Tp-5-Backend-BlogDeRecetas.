import generarJWT from "../middlewares/generarJWT.js";
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Verificar el email
    const usuarioEncontrado = await usuario.findOne({ email });
    if (!usuarioEncontrado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    //Verificar el password
    const passwordValido = bcrypt.compareSync(
      password,
      usuarioEncontrado.password
    );
    if (!passwordValido) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }
    //Generar el token
    const token = generarJWT(usuarioEncontrado.nombreUsuario, email)
    
    res
      .status(200)
      .json({
        mensaje: "Inicio de sesion exitoso",
        usuario: usuarioEncontrado.nombreUsuario,
        token
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrio un error al iniciar sesion" });
  }
};
