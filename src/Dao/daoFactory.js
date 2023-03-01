
// import { config } from '../Configuracion/config.js';
// import { ContenedorFileSystem } from '../Contenedores/contenedorFileSystem.js';
// // import { ContenedorMongoBD } from '../Contenedores/contenedorMongodb.js';
// import { ContenedorMemoria } from '../Contenedores/contenedorMemoria.js';
// import {
//     ContenedorMongodbMensaje, ContenedorMongodbCarrito,
//     ContenedorMongodbUsuario, ContenedorMongodbProducto
// } from '../Dao/esquemasMongoose/index.js';


// const almacenamientoEnArchivo = './baseDatosFilesystem.txt'

// const urlConexionBD = config.DATABASES.mongo.url

// const baseDatosSeleccionada = process.argv[2] || 'Mem'


// let Dao = null

// // con .Env: (config.SERVER.SELECCION_BASEdDATOS)

// switch (baseDatosSeleccionada) {
//     case 'Mongo': {
//         if (Dao) return Dao
//         Dao = new ContenedorMongoBD(urlConexionBD),
//         await Dao.iniciar();
//         break
//     }
//     case 'File':
//         // if (Dao) return Dao
//         Dao = new ContenedorFileSystem(almacenamientoEnArchivo)
//         await Dao.iniciar();
//         break
//     default:
//         // if (Dao) return Dao
//         Dao = new ContenedorMemoria()
// }

// class DaoFactory {
//     static obtenerDAO() {
//         return Dao
//     }
// }

















// import { config } from '../Configuracion/config.js';
// import { ContenedorFileSystem } from '../Contenedores/contenedorFileSystem.js';
// // import { ContenedorMongoBD } from '../Contenedores/contenedorMongodb.js';
// import { ContenedorMemoria } from '../Contenedores/contenedorMemoria.js';
// import {
//     ContenedorMongodbMensaje, ContenedorMongodbCarrito,
//     ContenedorMongodbUsuario, ContenedorMongodbProducto
// } from '../Dao/esquemasMongoose/index.js';


// const almacenamientoEnArchivo = './baseDatosFilesystem.txt'

// const urlConexionBD = config.DATABASES.mongo.url

// const baseDatosSeleccionada = process.argv[2] || 'Mem'


// let Dao = null

// con.Env: (config.SERVER.SELECCION_BASEdDATOS)


// // if (Dao) return Dao
// // Dao = new ContenedorMongoBD(urlConexionBD),
// Dao = new ContenedorMongodbMensaje(urlConexionBD, 'mensajes'),

//     Dao = new ContenedorMongodbCarrito(urlConexionBD, 'carritos'),
//     Dao = new ContenedorMongodbUsuario(urlConexionBD, 'usuarios'),
//     Dao = new ContenedorMongodbProducto(urlConexionBD, 'productos')
// await Dao.iniciar();
// break

// let DaoMensaje = null
// let DaoProducto = null
// let DaoUsuario = null
// let DaoCarrito = null

// switch (baseDatosSeleccionada) {
//     case 'Mongo': {
//         if (DaoMensaje) {
//             return { DaoMensaje, DaoProducto, DaoUsuario, DaoCarrito }
//         } else {
//             DaoUsuario.iniciar();
//             DaoProducto.iniciar();
//             DaoUsuario.iniciar();
//             DaoCarrito.iniciar();
//             return {
//                 DaoMensaje = new MensajesMongoBD(urlConexionBD, 'mensajes'),
//                 DaoProducto = new ProductosMongoBD(urlConexionBD, 'productos'),
//                 DaoUsuario = new UsuariosMongoBD(urlConexionBD, 'usuarios'),
//                 DaoCarrito = new CarritosMongoBD(urlConexionBD, 'carritos'),
//             };
//         }
//     case 'File':
//         if (DaoMensaje) {
//             return { DaoMensaje, DaoProducto, DaoUsuario, DaoCarrito }
//         } else {
//             DaoProducto.iniciar();
//             DaoMensaje.iniciar();
//             DaoUsuario.iniciar();
//             DaoCarrito.iniciar();
//             return {
//                 DaoMensaje: new ContenedorFileSystem(almacenamientoEnArchivo),
//                 DaoProducto: new ContenedorFileSystem(almacenamientoEnArchivo),
//                 DaoUsuario: new ContenedorFileSystem(almacenamientoEnArchivo),
//                 DaoCarrito: new ContenedorFileSystem(almacenamientoEnArchivo)
//             }
//         }
//     default:
//         if (DaoMensaje) {
//             return { DaoMensaje, DaoProducto, DaoUsuario, DaoCarrito }
//         } else {
//             Dao = new ContenedorMemoria()
//         }


//         export default class DaoFactory {
//             static DaoUsuario
//             static DaoCarrito
//             static DaoProducto
//             static DaoMensaje
//             static obtenerDAO() {
//                 if (!DaoUsuario & !DaoCarrito & !DaoProducto & !DaoMensaje) {
//                     throw new Error('No hay Daos, Error en Factory')
//                 }
//                 return DaoUsuario, DaoCarrito, DaoProducto, DaoMensaje
//             }
//         }


// export default class PersonasDaoFactory {
//     static getDao() {
//         return dao
//     }
// }






// const obtenerDaoSeleccionados = () => {
//     switch (config.SERVER.SELECCION_BASEdDATOS) {
//         case "mongo": {
//             servicioMongoDB.init();
//             return {
//                 DaoUsuario: new UsuariosMongoBD(),
//                 DaoProducto: new ProductosMongoBD(),
//                 DaoCarrito: new CarritosMongoBD(),
//             };
//         }
//         case "filesystem": {
//             return {
//                 DaoUsuario: new UsuariosFileSystem(),
//                 DaoProducto: new ProductosFileSystem(),
//                 DaoCarrito: new CarritosFilesystem(),
//             };
//         }
//     }
// };

// export default { DaoFactory };




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



