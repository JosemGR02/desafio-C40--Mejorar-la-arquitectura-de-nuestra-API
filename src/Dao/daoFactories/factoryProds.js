
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| DAO Factory - Productos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { config } from '../../Configuracion/config.js';
import { ContenedorFileSystem } from '../../Contenedores/contenedorFileSystem.js';
import { ContenedorMemoria } from '../../Contenedores/contenedorMemoria.js';
import { ContenedorMongodbProducto } from '../esquemasMongoose/index.js';


const almacenamientoEnArchivo = './productosFile.txt'

const urlConexionBD = (config.DATABASES.mongodb.url, {
    dbName: config.DATABASES.mongodb.dbName,
})

let daoProds = null;


class DaoFactoryProds {
    static obtenerDao(baseDatosSeleccionada) {

        switch (baseDatosSeleccionada) {
            case 'memory':
                if (daoProds) return daoProds
                daoProds = new ContenedorMemoria()
                break

            case 'filesystem':
                if (daoProds) return daoProds
                daoProds = new ContenedorFileSystem(process.cwd() + almacenamientoEnArchivo)
                daoProds.iniciar();
                break

            case 'mongodb':
                if (daoProds) return daoProds
                daoProds = new ContenedorMongodbProducto(urlConexionBD, 'productos')
                daoProds.iniciar();
                break

            default:
                daoProds = new ContenedorMemoria()
                break
        }

        if (!daoProds) {
            throw new Error('Error en Factory Prods')
        }
        return daoProds
    }
}

export { DaoFactoryProds };