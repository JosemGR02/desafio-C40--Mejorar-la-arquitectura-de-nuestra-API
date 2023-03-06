
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| DAO Factory - Usuarios |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { config } from '../../Configuracion/config.js';
import { ContenedorFileSystem } from '../../Contenedores/contenedorFileSystem.js';
import { ContenedorMemoria } from '../../Contenedores/contenedorMemoria.js';
import { ContenedorMongodbUsuario } from '../esquemasMongoose/index.js';


const almacenamientoEnArchivo = './usuariosFile.txt'

const urlConexionBD = (config.DATABASES.mongodb.url, {
    dbName: config.DATABASES.mongodb.dbName,
})

let daoUsers = null


class DaoFactoryUsers {
    static obtenerDao(baseDatosSeleccionada) {

        switch (baseDatosSeleccionada) {
            case 'memory':
                if (daoUsers) return daoUsers
                daoUsers = new ContenedorMemoria()
                break

            case 'filesystem':
                if (daoUsers) return daoUsers
                daoUsers = new ContenedorFileSystem(process.cwd() + almacenamientoEnArchivo)
                daoUsers.iniciar();
                break

            case 'mongodb':
                if (daoUsers) return daoUsers
                daoUsers = new ContenedorMongodbUsuario(urlConexionBD, 'usuarios')
                daoUsers.iniciar();
                break

            default:
                daoUsers = new ContenedorMemoria()
                break
        }

        if (!daoUsers) {
            throw new Error('Error en Factory Users')
        }
        return daoUsers
    }
}

export { DaoFactoryUsers };


