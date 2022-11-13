const PrescripcionOperaciones = require("../operaciones/PrescripcionOperaciones");
const router = require("express").Router();

router.get("/", PrescripcionOperaciones.buscarPrescripciones);
router.get("/:id", PrescripcionOperaciones.buscarPrescripcion);
router.post("/", PrescripcionOperaciones.crearPrescripcion);
router.put("/:id", PrescripcionOperaciones.modificarPrescripcion);

module.exports = router;