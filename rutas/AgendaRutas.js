const agendaOperaciones = require("../operaciones/AgendaOperaciones")
const router = require("express").Router();

router.get("/", agendaOperaciones.buscarAgendas);
//router.get("/:id", especialidadOperaciones.buscarEspecialidad);
router.post("/", agendaOperaciones.crearAgenda);
router.put("/:id", agendaOperaciones.modificarAgenda);
//router.delete("/:id", especialidadOperaciones.borrarEspecialidad);
module.exports = router;