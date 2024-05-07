const mongoose = require("mongoose"); // importando el componente mogoose
const documentosSchema = mongoose.Schema({
    palabrasClave: {
        type: String,
        required: true,
    },
    ruta: {
        type: String,
        required: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
    categoria: {
        type: String
    },    
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
    
});
module.exports = mongoose.model("Documentos", documentosSchema);