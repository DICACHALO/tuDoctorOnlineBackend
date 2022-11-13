const AdministradorModelo = require("../modelos/AdministradorModelo");
const AdministradorOperaciones  = {};


//CREAR HISTORIA CLINICA
AdministradorOperaciones.crearAdministrador = async (request, response) => {
    try {
        const admin = new AdministradorModelo(request.body);
        const administradorGuardado = await admin.save();
        response.status(201).send(administradorGuardado);
    } catch (error) {
        response.status(400).send("Mala Petición" + error);
    }
};

AdministradorOperaciones.listarAdministradores = async (request, response) =>{
    try {
        const listaAdministradores = await AdministradorModelo.find();
        if(listaAdministradores.length > 0){
            response.status(200).send(listaAdministradores);
        }else{
            response.status(400).send("No hay administradores registradas aún.");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición.");
    }
};

//BUSCAR POR PARAMETROS
AdministradorOperaciones.buscarAdministradorByQuery = async (request, response) => {
    try {
        let filtro = request.query;
        let listaAdministradores;
        if(filtro.q != null){
            listaAdministradores = await AdministradorModelo.find({
                "$or" : [
                    {"nombres" :    { $regex : filtro.q, $options : "i"  }},
                    {"apellidos" :  { $regex : filtro.q, $options : "i"  }}
                ]
            });
        }else{
            listaAdministradores = await AdministradorModelo.find(filtro);
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición.");
    }
};

//BUSCAR POR ID 
AdministradorOperaciones.buscarAdministradorById = async (request, response) => {
    try {
        const admin = await AdministradorModelo.findById(request.params.id);
        if (admin != null) {
            response.status(200).send(admin);
        } else {
            response.status(400).send("No existen administradores registrados.");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición. " + error);
    }
}


//MODIFICAR CITA
AdministradorOperaciones.modificarAdministrador = async (request, response) => {
    try {
        const id = request.params.id;
        const body = request.body;
        const datosActualizar ={
            nombres:   body.nombres,
            apellidos: body.apellidos,
            documento: body.documento,
            direccion: body.direccion,
            telefono:  body.telefono,
            rol:       body.rol,
            correo:    body.correo,
            password:  body.password
        }
        const adminActualizado = await AdministradorModelo.findByIdAndUpdate(id, datosActualizar, {new:true});
        if ( adminActualizado != null ){
            response.status(200).send(adminActualizado);
        } else {
            response.status(400).send("No hay datos" +error);
        }
       
    } catch (error) {
        response.status(400).send("Mala Peticion "+error);
    }
};

module.exports = AdministradorOperaciones;