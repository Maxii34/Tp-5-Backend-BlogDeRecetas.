import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        unique: true,
        trim: true
    },
    imagen: {
        type: String,
        required: true,
        match: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
        unique: true
    },
    ingredientes: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 500,
        trim: true
    },
    preparacion: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 1000,
        trim: true
    },
    dietType: {
        type: String,
        required: true,
        enum: ['Normal', 'Sin tac'],
        default: 'Normal'
    },
    categoria: {
        type: String,
        required: true,
        enum: ['PastelesYTartas', 'Galletas', 'PostresFrios', 'MasasYRellenos']
    }
}, {
    timestamps: true // Agrega createdAt y updatedAt automáticamente
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;