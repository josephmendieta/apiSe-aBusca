const express = require("express");
const router = express.Router(); //manejador de rutas de express
const usuarioSchema = require("../models/usuario");
//Nuevo animal
router.post("/usuario", (req, res) => {
    const usuario = usuarioSchema(req.body);
    usuario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get("/usuario", (req, res) => {
    usuarioSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/usuario/:id", (req, res) => {
    const { id } = req.params;
    usuarioSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.put("/usario/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, correo, contrasena, fecharegistro, activo } = req.body;
    usuarioSchema
        .updateOne({ _id: id }, {
            $set: {  nombre, correo, contrasena, fecharegistro, activo }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;
