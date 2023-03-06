
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Productos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { DaoFactoryProds } from '../Dao/daoFactories/index.js';
import { ProductosDTO } from '../Dto/index.js';
import { ModeloDtoProds } from '../Modelos/modeloProductos.js';


class RepositorioProd {
    #daoProds

    constructor() {
        this.#daoProds = DaoFactoryProds.obtenerDao()
    }

    async obtenerTodosProductos() {
        const elementos = await this.#daoProds.obtenerTodos()
        return ProductosDTO(elementos.map(item => new ModeloDtoProds(item)))
    }

    async obtenerProductosXid(idBuscado) {
        const elemento = await this.#daoProds.obtenerXid(idBuscado)
        return ProductosDTO(new ModeloDtoProds(elemento))
    }

    async guardarProductosBD(nuevoElemento) {
        await this.#daoProds.guardar(ProductosDTO(nuevoElemento))
    }

    async actualizarUsuariosBD(idBuscado, datos) {
        const actualizado = await this.#daoProds.actualizar((idBuscado, datos))
        return new ModeloDtoProds(ProductosDTO(actualizado))
    }

    async eliminarProductosXid(idBuscado) {
        const eliminado = await this.#daoProds.eliminarXid(idBuscado)
        return eliminado
    }

    async eliminarTodosProductos() {
        await this.#daoProds.eliminarTodos()
    }
}

export { RepositorioProd };



