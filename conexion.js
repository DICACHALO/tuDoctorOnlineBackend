const mongoose = require("mongoose");
const username = "Admin";
const password = "Esteban1296"
const database = "tuDoctorOnlineDB";

const URIDB = `mongodb+srv://${username}:${password}@cluster0.wxuu4bd.mongodb.net/${database}?retryWrites=true&w=majority`;

const conectar = async () => {
    try {   
        await mongoose.connect(URIDB);    
        console.log("Atlas esta conectado");  
    } catch (error) {
        console.error(`Error de conexión ${error}`);
    }
};
conectar();
module.exports = mongoose;