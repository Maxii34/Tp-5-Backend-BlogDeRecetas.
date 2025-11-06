import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next)=>{
    //ocurrio errores en la validacion
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json(errores.array())
    }
    //continuar ejecucion
    next();
}

export default resultadoValidacion;