/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| DAO Factory - Mensajes |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { config } from '../../Configuracion/config.js';
import { ContenedorFileSystem } from '../../Contenedores/contenedorFileSystem.js';
import { ContenedorMemoria } from '../../Contenedores/contenedorMemoria.js';
import { ContenedorMongodbMensaje } from '../esquemasMongoose/index.js';


const almacenamientoEnArchivo = './mensajesFile.txt'

const urlConexionBD = (config.DATABASES.mongodb.url, {
    dbName: config.DATABASES.mongodb.dbName,
})

let daoMsjs = null;


class DaoFactoryMsjs {
    static obtenerDao(baseDatosSeleccionada) {

        switch (baseDatosSeleccionada) {
            case 'memory':
                if (daoMsjs) return daoMsjs
                daoMsjs = new ContenedorMemoria()
                break

            case 'filesystem':
                if (daoMsjs) return daoMsjs
                daoMsjs = new ContenedorFileSystem(process.cwd() + almacenamientoEnArchivo)
                daoMsjs.iniciar();
                break

            case 'mongodb':
                if (daoMsjs) return daoMsjs
                daoMsjs = new ContenedorMongodbMensaje(urlConexionBD, 'mensajes')
                daoMsjs.iniciar();
                break

            default:
                daoMsjs = new ContenedorMemoria()
                break
        }

        if (!daoMsjs) {
            throw new Error('Error en Factory Msjs')
        }
        return daoMsjs
    }
}

export { DaoFactoryMsjs };