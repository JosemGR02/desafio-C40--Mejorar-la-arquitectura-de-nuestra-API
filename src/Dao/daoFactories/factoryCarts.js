
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| DAO Factory - Carritos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { config } from '../../Configuracion/config.js';
import { ContenedorFileSystem } from '../../Contenedores/contenedorFileSystem.js';
import { ContenedorMemoria } from '../../Contenedores/contenedorMemoria.js';
import { ContenedorMongodbCarrito } from '../esquemasMongoose/index.js';


const almacenamientoEnArchivo = './carritosFile.txt'

const urlConexionBD = (config.DATABASES.mongodb.url, {
    dbName: config.DATABASES.mongodb.dbName,
})

let daoCarts = null;


class DaoFactoryCarts {
    static obtenerDao(baseDatosSeleccionada) {

        switch (baseDatosSeleccionada) {
            case 'memory':
                if (daoCarts) { return daoCarts }
                daoCarts = new ContenedorMemoria()
                break

            case 'filesystem':
                if (daoCarts) { return daoCarts }
                daoCarts = new ContenedorFileSystem(process.cwd() + almacenamientoEnArchivo)
                break

            case 'mongodb':
                if (daoCarts) { return daoCarts }
                daoCarts = new ContenedorMongodbCarrito(urlConexionBD, 'carritos')
                break

            default:
                daoCarts = new ContenedorMemoria()
                break
        }

        if (!daoCarts) {
            throw new Error('Error en Factory Carts')
        }
        return daoCarts
    }
}

export { DaoFactoryCarts };