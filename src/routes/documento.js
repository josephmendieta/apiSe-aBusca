const express = require("express");
const verifyToken = require('./validate_token');

const router = express.Router(); //manejador de rutas de express
const documentosSchema = require("../models/documentos");

router.post("/documentos", (req, res) => {
    const documentos = documentosSchema(req.body);
    documentos
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/documentos", verifyToken, (req, res) => {
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

router.put("/documentos/:id", (req, res) => {
    const { id } = req.params;
    const { palabrasClave, ruta, titulo, usuario, categoria, fechaCreacion } = req.body;
    documentosSchema
        .updateOne({ _id: id }, {
            $set: { palabrasClave, ruta, titulo, usuario, categoria, fechaCreacion }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/documentos/:id", (req, res) => {
    const { id } = req.params;
    documentosSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;