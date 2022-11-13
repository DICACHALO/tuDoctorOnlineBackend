const mongoose = require("mongoose");

const agendaSchema = mongoose.Schema({

    documentoDoctor :   { type: Number, required: true, unique: true},
    especialidad :      {type: String, required: true               },
    "horarios":[{
        fecha:  {type: String, required: true, unique: true },
        estado: {type: Boolean, required: true              }
        
    }]
});

module.exports = mongoose.model("agendas", agendaSchema);