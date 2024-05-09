const express = require("express");
const router = express.Router(); //manejador de rutas de express
const usuarioSchema = require("../models/usuario");
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
    await usuario.save(); //save es un método de mongoose para guardar datos en MongoDB 
    res.json(usuario);
});
module.exports = router;