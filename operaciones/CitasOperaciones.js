
const citasModelo = require("../modelos/CitasModelo");
const CitasOperaciones = {};


//CREAR HISTORIA CLINICA
CitasOperaciones.crearCita = async (request, response) => {
    try {
        const cita = new citasModelo(request.body);
        const citaGuardada = await cita.save();
        response.status(201).send(citaGuardada);
    } catch (error) {
        response.status(400).send("Mala Petición" + error);
    }
};

CitasOperaciones.listarCitas = async (request, response) =>{
    try {
        const listaCitas = await citasModelo.find();
        if(listaCitas.length > 0){
            response.status(200).send(listaCitas);
        }else{
            response.status(400).send("No hay citas registradas aún.");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición.");
    }
};

//BUSCAR POR PARAMETROS
CitasOperaciones.buscarCitaByQuery = async (request, response) => {
    try {
        let filtro = request.query;
        let listaCitas;
        if(filtro.q != null){
            listaCitas = await citasModelo.find({
                "$or" : [
                    {"pacienteDocumento" : {$regex : filtro.q, $options : "i"}},
                    {"doctorDocumento" : {$regex : filtro.q, $options : "i"}}
                ]
            });
        }else{
            listaCitas = await citasModelo.find(filtro);
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición.");
    }
};

//BUSCAR POR ID 
CitasOperaciones.buscarCitaById = async (request, response) => {
    try {
        const cita = await citasModelo.findById(request.params.id);
        if (cita != null) {
            response.status(200).send(cita);
        } else {
            response.status(400).send("No existen citas registradas.");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición. " + error);
    }
}


//MODIFICAR CITA
CitasOperaciones.modificarCita = async (request, response) => {
    try {
        const id = request.params.id;
        const body = request.body;
        const datosActualizar ={
            fechaCita : body.fechaCita,
            horaCita :  body.horaCita,
            pacienteDocumento : body.pacienteDocumento,
            especialidad : body.especialidad,
            doctorDocumento : body.doctorDocumento
        }
        const citaActualizado = await citasModelo.findByIdAndUpdate(id, datosActualizar, {new:true});
        if ( citaActualizado != null){
            response.status(200).send(citaActualizado);
        } else {
            response.status(400).send("No hay datos" +error);
        }
       
    } catch (error) {
        response.status(400).send("Mala Peticion "+error);
    }
};

module.exports = CitasOperaciones;