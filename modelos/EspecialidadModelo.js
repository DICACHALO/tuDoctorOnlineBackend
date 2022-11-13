const mongoose = require("mongoose");

const especialidadSchema = mongoose.Schema({
    nombreEspecialidad:    { type: String, maxLength: 50, required: true    },
    descripcionEspecialidad:  { type: String, maxLength: 100, required: true },
});

module.exports = mongoose.model("especialidades", especialidadSchema);