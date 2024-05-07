const express = require("express");
const router = express.Router(); //manejador de rutas de express
const documentosSchema = require("../models/documentos");
//Nuevo animal
router.post("/documentos", (req, res) => {
    const documentos = documentosSchema(req.body);
    documentos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/documentos", (req, res) => {
    documentosSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get("/documentos/:id", (req, res) => {
    const { id } = req.params;
    documentosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;