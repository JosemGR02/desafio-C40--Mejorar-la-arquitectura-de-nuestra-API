
import { config } from '../Configuracion/config.js';
import { ContenedorFileSystem } from '../Contenedores/contenedorFileSystem.js';
// import { ContenedorMongoBD } from '../Contenedores/contenedorMongodb.js';
import { ContenedorMemoria } from '../Contenedores/contenedorMemoria.js';
import {
    ContenedorMongodbMensaje, ContenedorMongodbCarrito,
    ContenedorMongodbUsuario, ContenedorMongodbProducto
} from '../Dao/esquemasMongoose/index.js';


const almacenamientoEnArchivo = './baseDatosFilesystem.txt'

const urlConexionBD = config.DATABASES.mongo.url

const baseDatosSeleccionada = process.argv[2] || 'Mem'


let Dao = null

// con .Env: (config.SERVER.SELECCION_BASEdDATOS)

switch (baseDatosSeleccionada) {
    case 'Mongo': {
        // if (Dao) return Dao
        // Dao = new ContenedorMongoBD(urlConexionBD),
        Dao = new ContenedorMongodbMensaje(urlConexionBD, 'mensajes'),
            Dao = new ContenedorMongodbCarrito(urlConexionBD, 'carritos'),
            Dao = new ContenedorMongodbUsuario(urlConexionBD, 'usuarios'),
            Dao = new ContenedorMongodbProducto(urlConexionBD, 'productos')
        await Dao.iniciar();
        break
    }
    case 'File':
        // if (Dao) return Dao
        Dao = new ContenedorFileSystem(almacenamientoEnArchivo)
        await Dao.iniciar();
        break
    default:
        // if (Dao) return Dao
        Dao = new ContenedorMemoria()
}

class DaoFactory {
    static obtenerDAO() {
        return Dao
    }
}


export default { DaoFactory };




// Singleton

// let instacia = null

// export class PrimeraConexion {
//     static instancia
//     hora = 0
//     constructor() {
//         this.hora = new Date().toLocaleString()
//     }
//     obtenerHora() {
//         return this.hora
//     }
//     static getInstancia = () => {
//         if (!instacia)
//             instacia = new PrimeraConexion()
//         return instacia
//     }
// }







// import { ContenedorMongodbMensaje, ContenedorMongodbCarrito,
//     ContenedorMongodbUsuario, ContenedorMongodbProducto
// } from '../Dao/esquemasMongoose/index.js';


// const almacenamientoEnArchivo = './baseDatosFilesystem.txt'

// const urlConexionBD = (config.DATABASES.mongo.url, {
//     dbName: config.DATABASES.mongo.dbName,
// })


// class DaoFactory {
//     static obtener(tipoBaseDatos) {

//         switch (tipoBaseDatos) {
//             case 'Mem': return new ContenedorMemoria()
//             case 'File': return new ContenedorFileSystem(process.cwd() + almacenamientoEnArchivo)
//             //await Dao.iniciar();
//             case 'Mongo': {
//                 // Dao = new ContenedorMongoBD(urlConexionBD, 'elementos'),
//                 Dao = new ContenedorMongodbMensaje(urlConexionBD, 'mensajes'),
//                 Dao = new ContenedorMongodbCarrito(urlConexionBD, 'carritos'),
//                 Dao = new ContenedorMongodbUsuario(urlConexionBD, 'usuarios'),
//                 Dao = new ContenedorMongodbProducto(urlConexionBD, 'productos')
//                 return Dao;
//                 //await Dao.iniciar();
//                 //break
//             }
//             default: return new ContenedorMemoria()
//         }
//     }
// }

// class DaoFactory {
//     static obtenerDAO() {
//         return Dao
//     }
// }

// export default DaoFactory;




