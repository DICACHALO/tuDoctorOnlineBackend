const pacienteModelo = require("../modelos/PacienteModelo");
const pacienteOperaciones = {};

pacienteOperaciones.crearPaciente = async (request, response) => {
    try {
        const objeto = request.body;
        const paciente = new pacienteModelo(objeto);
        const pacienteGuardado = await paciente.save();
        response.status(201).send(pacienteGuardado);
    } catch (error) {
        response.status(400).send("Mala Petición" + error);
    }
};

pacienteOperaciones.buscarPacientes = async (request, response) =>{
    try {
        const filtro = request.query;
        console.log(filtro);
        let listaPacientes;
        if (filtro.q != null) {
            listaPacientes = await pacienteModelo.find(
                {
                    $or: [
                        {"nombres": {$regex: filtro.q, $options: "i"}},
                        {"apellidos": {$regex: filtro.q, $options: "i"}},
                    ]
                }
            );
        } else {
            listaPacientes = await pacienteModelo.find();
        }
        
        if(listaPacientes.length > 0){
            response.status(200).send(listaPacientes);
        }else{
            response.status(400).send("No hay pacientes");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición." + error);
    }
};

pacienteOperaciones.buscarPaciente = async (request, response) =>{
    try {
        let idPaciente = request.params; 
        const pacienteEncontrado = await pacienteModelo.findById(idPaciente);
        response.status(200).send(pacienteEncontrado);
    } catch (error) {
        response.status(400).send("Hubo una mala petición, no se ha encontrado el registro: " + error);
    }
};

pacienteOperaciones.modificarPaciente = async (request, response) => {
    try {
        console.log(request.params);

        const pacienteActualizado = await pacienteModelo.updateMany(
            request.params, 
            {
                $set : request.body
            }    
        );

        if (pacienteActualizado != null) {
            response.status(200).send(pacienteActualizado);
        } else {
            response.status(400).send("No se ha encontrado el paciente");
        }

    } catch (error) {
        response.status(400).send("Hubo una mala petición, no se ha encontrado el registro: " + error);
        console.log("Mala petición " + error);
    }
};

module.exports = pacienteOperaciones;