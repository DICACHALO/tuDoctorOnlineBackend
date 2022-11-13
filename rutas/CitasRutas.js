const CitasOperaciones = require("../operaciones/CitasOperaciones");
const router = require("express").Router();

router.post("/", CitasOperaciones.crearCita);
router.get("/", CitasOperaciones.listarCitas);
router.get("/:id", CitasOperaciones.buscarCitaById);
router.get("/", CitasOperaciones.buscarCitaByQuery);
router.put("/:id", CitasOperaciones.modificarCita);

module.exports = router;