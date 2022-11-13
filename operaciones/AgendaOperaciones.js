const agendaModelo = require("../modelos/AgendaModelo");
const agendaOperaciones = {};

agendaOperaciones.crearAgenda= async (request, response) => {

    try {
        const  objeto = request.body;
        const agenda = new agendaModelo(objeto);
        console.log(agenda);
        const agendaGuardada = await agenda.save();
        response.status(201).send(agendaGuardada);

    } catch (error) {
        response.status(400).send("Hubo una mala petición, no se ha podido crear el registro. "+error);
        console.log(error);
    }
    
};

//******************************************************************************** 
agendaOperaciones.buscarAgendas = async (request, response) => {
    try {
        const filtro = request.query;
        let listaAgendas;
        if (filtro.q != null){
            listaAgendas = await agendaModelo.find({
                "$or":[
                    {"dia": {$regex:filtro.q, $options:"i"}},
                    {"hora": {$regex:filtro.q, $options:"i"}}
                ]
        });
            
        }else{
            listaAgendas = await agendaModelo.find(filtro);
        }
        
        if(listaAgendas.length > 0){
            response.status(200).send(listaAgendas);
        }else{
            response.status(400).send("No hay ");
        }
    } catch (error) {
        response.status(400).send("Hubo una mala petición, no se ha encontrado los registros. "+error);
    }
};

//*********************************************************** 

agendaOperaciones.modificarAgenda = async (request, response) => {
    try {
        const id =request.params.id;
        const body =request.body;
        const actualizarAgenda = {
            estado: body.estado
           // hora: body.hora
        }
        const agendaActualizada = await agendaModelo.findByIdAndUpdate(id, actualizarAgenda, {new : true});
        if (agendaActualizada != null){
            response.status(200).send(agendaActualizada);
        }else{
            response.status(404).send("No hay datos");
        }
    } catch (error) {
       response.status(400).send("Mala peticion "+error);
    }
};

module.exports = agendaOperaciones;