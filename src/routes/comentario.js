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

router.put("/comentario/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, correo, puntuacion, fecha, comentario } = req.body;
    
    comentarioSchema
        .findByIdAndUpdate(id, { nombre, correo, puntuacion, fecha, comentario }, { new: true })
        .then(updatedComment => {
            if (!updatedComment) {
                return res.status(404).json({ message: "Comentario no encontrado" });
            }
            res.json(updatedComment);
        })
        .catch(error => {
            res.status(500).json({ message: "Error al actualizar el comentario", error });
        });
});



module.exports = router;