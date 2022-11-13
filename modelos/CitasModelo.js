const mongoose = require("mongoose");

const citasSchema = mongoose.Schema({
    horaCita:           { type: String, maxLength: 10, required: true, unique: false },
    fechaCita:          { type: String, maxLength: 10, required: true, unique: false },
    pacienteDocumento:  { type: String, maxLength: 15, required: true, unique: true  },
    especialidad:       { type: String, maxLength: 60, required: true, unique: false },
    doctorDocumento:    { type: String, maxLength: 15, required: true, unique: false },
    estadoCita:         { type: Boolean, required: true, unique: false               }
});

module.exports = mongoose.model("citas", citasSchema);