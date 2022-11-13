const doctorModelo = require("../modelos/DoctorModelo");
const doctorOperaciones = {};

doctorOperaciones.crearDoctor = async (request, response) => {
    try {
        const  objeto = request.body;
        const doctor = new doctorModelo(objeto);
        const doctorGuardado = await doctor.save();
        response.status(201).send(doctorGuardado);
    } catch (error) {
        response.status(400).send("Mala Petición" + error);
    }
};

doctorOperaciones.buscarDoctores = async (request, response) =>{
    try {
        const listaDoctores = await doctorModelo.find();
        if(listaDoctores.length > 0){
            response.status(200).send(listaDoctores);
        }else{
            response.status(400).send("No hay doctores");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición.");
    }
};

doctorOperaciones.buscarDoctorById = async (request, response) =>{
    try {
        const doctor = await doctorModelo.findById(request.params.id);
        if(doctor != null){
            response.status(200).send(doctor);
        }else{
            response.status(400).send("El doctor a buscar no existe!");
        }
        
    } catch (error) {
        response.status(400).send("Hubo una mala petición, no se ha encontrado el registro: " + error);
    }
};

doctorOperaciones.modificarDoctor = async (request, response) => {
    try {
        const body =request.body;
        const doctorActualizar = {
            nombres     : body.nombres,
            apellidos   : body.apellidos,
            documento   : body.documento,
            direccion   : body.direccion,
            telefono    : body.telefono,
            rol         : body.rol,
            correo      : body.correo,
            password    : body.password
        }
        
        const doctorActualizado = await doctorModelo.findByIdAndUpdate( request.params.id, 
                                                                        doctorActualizar, 
                                                                      { new : true});
        if (doctorActualizado != null){
            response.status(200).send(doctorActualizado);

        }else{
            response.status(404).send("No hay datos");
        }
        
    } catch (error) {
       response.status(400).send("Mala peticion "+error);
    }
};

module.exports = doctorOperaciones;