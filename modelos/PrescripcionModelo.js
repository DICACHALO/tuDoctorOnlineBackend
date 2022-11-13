const mongoose = require("mongoose");

const prescripcionSchema = mongoose.Schema({

    nombre:       { type: String, maxLength: 80, required: true, unique: false },
    apellidos:    { type: String, maxLength: 80, required: true, unique: false },
    documento:    { type: Number, required: true, unique: true },
    direccion:    { type: String, maxLength: 80, required: true, unique: false },
    telefono:     { type: Number, required: true, unique: false },
    correo:       { type: String, maxLength: 80, required: true, unique: false },
    edad:         { type: Number, maxLength: 30, required: true, unique: false },
    estatura:     { type: Number, maxLength: 20, required: true, unique: false },
    peso:         { type: Number, maxLength: 20, required: true, unique: false },
    medicamento1: { type: String, maxLength: 30, required: true, unique: false },
    medicamento2: { type: String, maxLength: 30, required: false, unique: false },
    medicamento3: { type: String, maxLength: 30, required: false, unique: false },
    medicamento4: { type: String, maxLength: 30, required: false, unique: false },
    medicamento5: { type: String, maxLength: 30, required: false, unique: false },
    examen1:      { type: String, maxLength: 30, required: true, unique: false },
    examen2:      { type: String, maxLength: 30, required: false, unique: false },
    Receta:       { type: String, maxLength: 300, required: false, unique: false }
});

module.exports = mongoose.model("prescripciones", prescripcionSchema);