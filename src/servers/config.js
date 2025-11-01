import express from "express";
import Cors from "cors";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middlewares();
  }
  
  middlewares() {
    this.app.use(Cors());
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    //Se configura el archivo estatico
    const __dirname = dirname(fileURLToPath(import.meta.url));
    this.app.use(express.static(__dirname + "/public"));
    console.log(__dirname);
    console.log(__dirname + "/public");
  }

  listen() {
    this.app.listen(this.port, () =>
      console.info(`El servidor se esta ejecutando en el puerto ${this.port}}`)
    );
  }
}
