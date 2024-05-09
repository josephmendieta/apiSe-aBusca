const mongoose = require("mongoose"); // importando el componente mogoose
const bcrypt =require ("bcrypt");
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
usuarioSchema.methods.encryptContrasena = async(contrasena)=> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(contrasena, salt);
}
module.exports = mongoose.model("Usuario", usuarioSchema);