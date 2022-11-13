const HistoriaClinicaModelo = require("../modelos/HistoriaClinicaModelo");
const historiaclinicaModelo = require("../modelos/HistoriaClinicaModelo");
const historiaclinicaOperaciones = {};


//CREAR HISTORIA CLINICA
historiaclinicaOperaciones.crearHistoriaclinica = async (request, response) => {
    try {
        const objeto = request.body;
        const historiaclinica = new historiaclinicaModelo(objeto);
        const historiaclinicaGuardado = await historiaclinica.save();
        response.status(201).send(historiaclinicaGuardado);
    } catch (error) {
        response.status(400).send("Mala Petición" + error);
    }
};

//LISTAR HISTORIAS CLINICAS
historiaclinicaOperaciones.buscarHistoriaclinicas = async (request, response) => {
    try {
        const filtro = request.query;
        let listaHistoriasClinicas;
        if (filtro.q != null) {
            listaHistoriasClinicas = await historiaclinicaModelo.find({
                "$or": [
                    { "nombre":    { $regex: filtro.q, $options: "i" } }, //filtro para nombre
                    { "apellidos": { $regex: filtro.q, $options: "i" } },
                ]
            });
        } else {
            listaHistoriasClinicas = await historiaclinicaModelo.find();

        } if (listaHistoriasClinicas.length > 0) {
            response.status(200).send(listaHistoriasClinicas);
        } else {
            response.status(400).send("No existen historias clinicas archivadas.");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición.");
    }
};


//BUSCAR POR ID 
historiaclinicaOperaciones.buscarhistoriaClinica = async (request, response) => {
    try {
        const id = request.params.id;
        const historiaClinica = await historiaclinicaModelo.findById(id);
        if (historiaClinica != null) {
            response.status(200).send(historiaClinica);
        } else {
            response.status(400).send("No existen historias clinicas archivadas.");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición. " + error);
    }
}


//MODIFICAR CLIENTE
historiaclinicaOperaciones.modificarHistoriaclinica = async (request, response) => {
    try {
        const id =request.params.id;
        const body =request.body;
        const datosActualizar ={
            direccion:body.direccion,
            telefono:body.telefono,
            correo: body.corre,
            estatura:body.estatura,
            edad: body.edad,
            peso:body.peso,
            motivoConsulta: body.motivoConsulta,
            sintomatologia:body.sintomatologia,
            temperatura:body.temperatura,
            presionArterial:body.presionArterial

        }
        const historiaActualizado = await HistoriaClinicaModelo.findByIdAndUpdate(id,datosActualizar,{new:true});
        if ( historiaActualizado !=null){
            response.status(200).send(historiaActualizado);
        } else {
            response.status(400).send("No hay datos" +error);
        }
       
    } catch (error) {
        response.status(400).send("Mala Peticion "+error);
    }
};

module.exports = historiaclinicaOperaciones;