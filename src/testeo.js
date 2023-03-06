
// *                                  | >  TESTEO DESAFIO CON REPOSITORY  < |                                         * //


import { RepositorioProd } from '../src/Repositorios/index.js';
import { ModeloDtoProds } from '../src/Modelos/index.js';
import { logger } from '../src/Configuracion/logger.js';


const RepoProductos = new RepositorioProd()

console.log('--------------------------------')

console.log('Guardar un Producto')
const producto1 = new ModeloDtoProds({
    id: 1, titulo: "Juan", descripcion: "una persona", codigo: "30577", imagen: "https://i.ytimg.com/vi/gud6I2rU2CE/mqdefault.jpg", precio: 3000, stock: 45
})
const productoGuardado = await RepoProductos.guardarProductosBD(producto1)

if (productoGuardado) {
    logger.info('guardado con exito');
} else {
    logger.info('Error al guardar un producto');
}

console.log('-----------------------------')

console.log('guardar otro Producto')
const producto2 = new ModeloDtoProds({
    id: 2, titulo: "Pedro", descripcion: "un npc", codigo: '35637', imagen: "https://i.ytimg.com/vi/gud6I2rU2CE/mqdefault.jpg", precio: 3000, stock: 45
})
const productoGuardado2 = await RepoProductos.guardarProductosBD(producto2)

if (productoGuardado2) {
    logger.info('guardado con exito');
} else {
    logger.info('Error al guardar un producto');
}


console.log('--------------------------------')

console.log('Obtener todos las Productos')
const productos = await RepoProductos.obtenerTodosProductos()
logger.info({ productos: productos });


console.log('-----------------------------')

console.log('Obtener un Producto por su id')
const producto = await RepoProductos.obtenerProductosXid(1)
logger.info({ producto: producto });


console.log('-----------------------------')

console.log('Eliminar un Producto por su id')
const productoEliminado = await RepoProductos.eliminarProductosXid(2)
logger.info({ eliminado: productoEliminado });


console.log('--------------------------------')

console.log('Borrar todos las Productos')
const eliminados = await RepoProductos.eliminarTodosProductos()

if (eliminados) {
    logger.info('eliminado con exito', eliminados);
} else {
    logger.info('Error al eliminar los productos');
}

console.log('--------------------------------')


console.log('Obtener todos las Productos')
const otraVez = await RepoProductos.obtenerTodosProductos()
logger.info({ productos: otraVez });

console.log('--------------------------------')