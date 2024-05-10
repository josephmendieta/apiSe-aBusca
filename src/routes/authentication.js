const express = require("express");
const router = express.Router(); //manejador de rutas de express
const usuarioSchema = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt= require ("jsonwebtoken");
router.post('/signup', async (req, res) => {
    const { nombre, correo, contrasena, fecharegistro, activo } = req.body;
    const usuario = new usuarioSchema({
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        fecharegistro: fecharegistro,
        activo: activo
    });
    usuario.contrasena = await usuario.encryptContrasena(usuario.contrasena);
    await usuario.save();
    const token=jwt.sign({id:usuario._id},process.env.SECRET,{
        expiresIn:60*60*24,
    });
    //res.json(usuario);
    res.json({
        auth:true,
        token,
        message: "Usuario guardado."
    });
});
//inicio de sesión
router.post("/login", async (req, res) => {
    // validaciones
    const { error } = usuarioSchema.validate(req.body.correo, req.body.contrasena);
    if (error) return res.status(400).json({ error: error.details[0].message });
    //Buscando el usuario por su dirección de correo
    const usuario = await usuarioSchema.findOne({ correo: req.body.correo });
    //validando si no se encuentra
    if (!user) return res.status(400).json({ error: "Usuario no encontrado" });
    //Transformando la contraseña a su valor original para 
    //compararla con la clave que se ingresa en el inicio de sesión
    const validPassword = await bcrypt.compare(req.body.contrasena, usuario.contrasena);
    if (!validPassword)
        return res.status(400).json({ error: "Contraseña no válida" });
    res.json({
        error: null,
        data: "Bienvenido(a)",
    });
});
module.exports = router;