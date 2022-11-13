const doctorOperaciones = require("../operaciones/DoctorOperaciones");
const router = require("express").Router();

router.get("/:id", doctorOperaciones.buscarDoctorById);
router.get("/", doctorOperaciones.buscarDoctores);
router.post("/", doctorOperaciones.crearDoctor);
router.put("/:id", doctorOperaciones.modificarDoctor);

module.exports = router;