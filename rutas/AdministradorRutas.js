const AdministradorOperaciones = require("../operaciones/AdministradorOperaciones");
const router = require("express").Router();

router.get("/:id", AdministradorOperaciones.buscarAdministradorById);
router.get("/", AdministradorOperaciones.buscarAdministradorByQuery);
router.get("/", AdministradorOperaciones.listarAdministradores);
router.post("/", AdministradorOperaciones.crearAdministrador);
router.put("/:id", AdministradorOperaciones.modificarAdministrador);

module.exports = router;