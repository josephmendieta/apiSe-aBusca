const mongoose = require("mongoose"); // importando el componente mogoose
const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    contrasena: {
        type: String,
        required: true,
    },
    fecharegistro: {
        type: Date,
        default: Date.now
    },
    activo: {
        type: String,
        required: true,
    }
    
});
module.exports = mongoose.model("Usuario", usuarioSchema);