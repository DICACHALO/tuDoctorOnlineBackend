const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require("./conexion");

//Configuración
const app = express();
const env = process.env;
const port = env.PORT || 5000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Arranque
app.listen(port, () => {
    console.log(`API iniciada en puerto ${port}`);
});

//Rutas base
app.get('/', (request, response) => {
    response.send("API iniciada correctamente");
});

app.use("/doctores", require("./rutas/DoctorRutas"));
app.use("/especialidades", require("./rutas/EspecialidadRutas"));
app.use("/historias", require("./rutas/HistoriaClinicaRutas"));
app.use("/pacientes", require("./rutas/PacienteRutas"));
app.use("/prescripciones", require("./rutas/PrescripcionRutas"));
app.use("/citas", require("./rutas/CitasRutas"));
app.use("/agendas", require("./rutas/AgendaRutas"))
app.use("administradores", require("./rutas/AdministradorRutas"));