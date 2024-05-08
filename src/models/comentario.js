const mongoose = require("mongoose"); // importando el componente mogoose
const comentarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    puntuacion: {
        type: int,
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    comentario: {
        type: String,
        required: true,
    }
    
});
module.exports = mongoose.model("Comentario", comentarioSchema);