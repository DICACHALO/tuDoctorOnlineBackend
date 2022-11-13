const mongoose = require("mongoose");

const historiaclinicaSchema = mongoose.Schema({
    fechaConsulta:  { type: String, maxLength: 20, required: true, unique: false  },
    nombre:         { type: String, maxLength: 80, required: true, unique: false    },
    apellidos:      { type: String, maxLength: 80, required: true, unique: false    },
    documento:      { type: Number, required: true, unique: true                    },
    direccion:      { type: String, maxLength: 80, required: true, unique: false    },
    telefono:       { type: Number, required: true, unique: false                   },
    correo:         { type: String, maxLength: 80, required: true, unique: false     },
    edad:           { type: Number, maxLength: 20, required: true, unique: false    },
    estatura:       { type: Number, maxLength: 20, required: true, unique: false    },
    peso:           { type: Number, maxLength: 20, required: true, unique: false    },
    motivoConsulta: { type: String, maxLength: 300, required: true, unique: false   },
    sintomatologia: { type: String, maxLength: 300, required: true, unique: false   },
    temperatura:    { type: Number, maxLength: 20, required: true, unique: false    },
    presionArterial:{ type: String, maxLength: 20, required: true, unique: false    }

});

module.exports = mongoose.model("historias", historiaclinicaSchema);