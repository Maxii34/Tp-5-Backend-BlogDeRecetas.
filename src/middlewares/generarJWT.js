import jwt from "jsonwebtoken";

const generarJWT = (usuario, email) => {
  try {
    const payload = { usuario, email };
    const token = jwt.sign(payload, process.env.SFCRETJWT, { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.error(error);
    throw new Error("Error al generar el token");
  }
};

export default generarJWT;