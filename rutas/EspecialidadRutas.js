const especialidadOperaciones = require("../operaciones/EspecialidadOperaciones")
const router = require("express").Router();

router.get("/", especialidadOperaciones.buscarEspecialidades);
router.get("/:id", especialidadOperaciones.buscarEspecialidad);
router.post("/", especialidadOperaciones.crearEspecialidad);
router.put("/:id", especialidadOperaciones.modificarEspecialidad);
router.delete("/:id", especialidadOperaciones.borrarEspecialidad);
module.exports = router;