const express = require("express");
const router = express.Router(); //manejador de rutas de express
const comentarioSchema = require("../models/comentario");

router.post("/comentario", (req, res) => {
    const comentario = comentarioSchema(req.body);
    comentario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get("/comentario", (req, res) => {
    comentarioSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get("/comentario/:id", (req, res) => {
    const { id } = req.params;
    comentarioSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;