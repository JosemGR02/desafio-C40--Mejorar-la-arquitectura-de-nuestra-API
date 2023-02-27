

// ! TESTEO REPOSITORY CONTENEDORES


import { RepositorioProd } from '../Repositorios/index.js';
import { ModeloDtoProds } from '../Modelos/index.js';
import { ElementoMostrable } from '../Modelos/adaptadorElementos.js';


const RepoProductos = new RepositorioProd()

// mostrar(await RepoProductos.obtenertodos())

// const generadorDeIds = {
//     id: 1,
//     next() { return this.id++ }
// }


console.log('Obtener todos las Productos')
mostrar(await RepoProductos.obtenerTodosProductos())


console.log('-----------------------------')

console.log('guardar un Productos')
const producto1 = new ModeloDtoProds({
    titulo: "Juan", descripcion: "una persona", codigo: "30577", imagen: "https://i.ytimg.com/vi/gud6I2rU2CE/mqdefault.jpg", precio: 3000, stock: 45
})
await RepoProductos.guardarProductosBD(producto1)


console.log('-----------------------------')

console.log('guardar otro Productos')
const producto2 = new ModeloDtoProds({
    titulo: "Pedro", descripcion: "un npc", codigo: '35637', imagen: "https://i.ytimg.com/vi/gud6I2rU2CE/mqdefault.jpg", precio: 3000, stock: 45
})
await RepoProductos.guardarProductosBD(producto2)


console.log('--------------------------------')

console.log('Obtener un Producto por su id')
mostrar(await RepoProductos.obtenerProductosXid(producto1))


console.log('-----------------------------')

console.log('Eliminar un Producto por su id')
mostrar(await RepoProductos.eliminarProductosXid(producto2))


console.log('--------------------------------')

console.log('Borrar todos las Productos')
await RepoProductos.eliminarTodosProductos()



function mostrar(data) {
    if (Array.isArray(data)) {
        if (data.length > 0) {

            for (const elemento of data) {
                console.log(new ElementoMostrable(elemento).comoTextoPlano())
            }
        } else {
            console.log('no hay datos para mostrar')
        }
    } else {
        console.log(new ElementoMostrable(data).comoTextoPlano())
    }
}