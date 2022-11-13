const historiaclinicaOperaciones = require("../operaciones/HistoriaClinicaOperaciones");
const router = require("express").Router();

router.get("/", historiaclinicaOperaciones.buscarHistoriaclinicas);
router.get("/:id", historiaclinicaOperaciones.buscarhistoriaClinica);
router.post("/", historiaclinicaOperaciones.crearHistoriaclinica);
router.put("/:id", historiaclinicaOperaciones.modificarHistoriaclinica);

module.exports = router;