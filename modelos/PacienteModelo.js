const mongoose = require("mongoose");

const pacienteSchema = mongoose.Schema({
    nombres:    { type: String, maxLength: 50, required: true, unique: false    },
    apellidos:  { type: String, maxLength: 50, required: true, unique: false    },
    documento:  { type: String, maxLength: 15, required: true, unique: true     },
    direccion:  { type: String, maxLength: 80, required: true, unique: false    },
    telefono:   { type: String, maxLength: 15, required: true, unique: false    },
    sexo:       { type: String, maxLength: 11, required: true, unique: false    },
    rol:        { type: String, maxLength: 20, required: true, unique: false    },
    correo:     { type: String, maxLength: 80, required: true, unique: true     },
    password:   { type: String, maxLength: 20, required: true, unique: false    }
});

module.exports = mongoose.model("pacientes", pacienteSchema);