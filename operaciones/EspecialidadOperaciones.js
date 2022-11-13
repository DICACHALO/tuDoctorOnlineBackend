const especialidadModelo = require("../modelos/EspecialidadModelo");
const especialidadOperaciones = {};

especialidadOperaciones.crearEspecialidad = async (request, response) => {
    try {
        const  objeto = request.body;
        const especialidad = new especialidadModelo(objeto);
        const especialidadGuardada = await especialidad.save();
        response.status(201).send(especialidadGuardada);
    } catch (error) {
        response.status(400).send("Hubo una mala petición, no se ha podido crear el registro.");
        response.status(400).send("Mala Petición" + error);
    }
    
};
//******************************************************************************** */
especialidadOperaciones.buscarEspecialidades = async (request, response) => {
    try {
        const filtro = request.query;
        let listaEspecialidades;
        if (filtro.q != null){
            listaEspecialidades = await especialidadModelo.find({
                "$or":[
                    {"nombreEspecialidad": {$regex:filtro.q, $options:"i"}},
                    {"descripcionEspecialidad": {$regex:filtro.q, $options:"i"}}
                ]
        });
            
        }else{
            listaEspecialidades = await especialidadModelo.find(filtro);
        }
        
        if(listaEspecialidades.length > 0){
            response.status(200).send(listaEspecialidades);
        }else{
            response.status(400).send("No hay ");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición, no se ha encontrado los registros.");
    }
};

//*********************************************************** */
especialidadOperaciones.buscarEspecialidad = async (request, response) => {
    try {
        const id = request.params.id;
        const especialidad = await especialidadModelo.findById(id);
        if(especialidad != null){
            response.status(200).send(especialidad);
        }else{
            response.status(400).send("No hay datos");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición. "+error);
    }
};

//****************************************************************************** */
especialidadOperaciones.modificarEspecialidad = async (request, response) => {
   
    try {
        const id =request.params.id;
        const body =request.body;

        const actualizarEspecialidad = {
            nombreEspecialidad: body.nombreEspecialidad,
            descripcionEspecialidad: body.descripcionEspecialidad
        }
        
        const especialidadActualizada = await especialidadModelo.findByIdAndUpdate(id, actualizarEspecialidad, {new : true});
        if (especialidadActualizada != null){
            response.status(200).send(especialidadActualizada);

        }else{
            response.status(404).send("No hay datos");
        }
        
    } catch (error) {
       response.status(400).send("Mala peticion "+error);
    }
};

//******************************************************************* */
especialidadOperaciones.borrarEspecialidad = async (request, response) => {
    try {
        const id = request.params.id;
        const especialidad = await especialidadModelo.findByIdAndDelete(id);
        if(especialidad != null){
            response.status(200).send(especialidad);
        }else{
            response.status(400).send("No hay datos");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición. "+error);
    }
};

module.exports = especialidadOperaciones;