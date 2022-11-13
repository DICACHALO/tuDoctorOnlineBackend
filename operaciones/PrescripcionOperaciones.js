
const PrescripcionModelo = require("../modelos/PrescripcionModelo");
const PrescripcionOperaciones = {};


//CREAR HISTORIA CLINICA
PrescripcionOperaciones.crearPrescripcion = async (request, response) => {
    try {
        const objeto = request.body;
        const prescripcion = new PrescripcionModelo(objeto);
        const prescripcionGuardado = await prescripcion.save();
        response.status(201).send(prescripcionGuardado);
    } catch (error) {
        response.status(400).send("Mala Petición" + error);
    }
};

//LISTAR HISTORIAS CLINICAS
PrescripcionOperaciones.buscarPrescripciones = async (request, response) => {
    try {
        const filtro = request.query;
        let listaPrescripciones;
        if (filtro.q != null) {
            listaPrescripciones = await PrescripcionModelo.find({
                "$or": [
                    { "nombre":    { $regex: filtro.q, $options: "i" } }, //filtro para nombre
                    { "apellidos": { $regex: filtro.q, $options: "i" } },
                ]
            });
        } else {
            listaPrescripciones = await PrescripcionModelo.find();

        } if (listaPrescripciones.length > 0) {
            response.status(200).send(listaPrescripciones);
        } else {
            response.status(400).send("No existen archivadas.");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición.");
    }
};


//BUSCAR POR ID 
PrescripcionOperaciones.buscarPrescripcion = async (request, response) => {
    try {
        const id = request.params.id;
        const prescripcion = await PrescripcionModelo.findById(id);
        if (prescripcion != null) {
            response.status(200).send(prescripcion);
        } else {
            response.status(400).send("No existen historias clinicas archivadas.");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición. " + error);
    }
}


//MODIFICAR CLIENTE
PrescripcionOperaciones.modificarPrescripcion = async (request, response) => {
    try {
        const id =request.params.id;
        const body =request.body;
        const datosActualizar ={
            medicamento1: body.medicamento1,
            medicamento2: body.medicamento2,
            medicamento3: body.medicamento3,
            medicamento4: body.medicamento4,
            medicamento5: body.medicamento5,
            examen1: body.examen1,
            examen2: body.examen2,
            receta: body.receta
            

        }
        const prescripcionActualizada = await PrescripcionModelo.findByIdAndUpdate(id,datosActualizar,{new:true});
        if ( prescripcionActualizada != null){
            response.status(200).send(prescripcionActualizada);
        } else {
            response.status(400).send("No hay datos" +error);
        }
       
    } catch (error) {
        response.status(400).send("Mala Peticion "+error);
    }
};

module.exports = PrescripcionOperaciones;