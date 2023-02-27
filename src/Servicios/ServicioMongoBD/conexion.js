
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Servicio Mongoose |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import mongoose from "mongoose";
import { config } from "../../Configuracion/config.js";


const init = async () => {
    try {
        mongoose.connect(config.DATABASES.mongo.url, {
            dbName: config.DATABASES.mongo.dbName,
        });
        console.log("La conexión con MongoBD establecida con exito");

    } catch (error) {
        console.log('ERROR AL CONECTARSE A MongoBD ', error)
    }
};

export const servicioMongoDB = {
    init,
};
