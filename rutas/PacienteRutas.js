const pacienteOperaciones = require("../operaciones/PacienteOperaciones");
const router = require("express").Router();

router.get("/:_id", pacienteOperaciones.buscarPaciente);
router.get("/", pacienteOperaciones.buscarPacientes);
router.post("/", pacienteOperaciones.crearPaciente);
router.put("/:_id", pacienteOperaciones.modificarPaciente);

module.exports = router;