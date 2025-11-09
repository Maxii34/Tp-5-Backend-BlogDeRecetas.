import jwt from "jsonwebtoken";

const verificarJWT = (req, res, next) =>{
    try {
        const token = req.header("x-token");
        if (!token) {
            return res.status(401).json({ error: "No hay token en la petición" });
        }
        const payload = jwt.verify(token, process.env.SFCRETJWT);
        //Se puede extraer la info del payload.
        req.usuario = payload.usuario;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: "Error al generar el token" });
    }
}

export default verificarJWT;