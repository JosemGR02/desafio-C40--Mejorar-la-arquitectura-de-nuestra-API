
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Productos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { DaoFactory } from '../Dao/daoFactory.js';
import { ProductosDTO } from '../Dto/index.js';
import { ModeloDtoProds } from '../Modelos/modeloProductos.js';


class RepositorioProd {
    #dao

    constructor() {
        this.#dao = DaoFactory.obtenerDAO()
    }

    async obtenerTodosProductos() {
        const elementos = await this.#dao.obtenerTodos()
        return elementos.map(item => new ModeloDtoProds(item))
    }

    async obtenerProductosXid(idBuscado) {
        const Dto = await this.#dao.obtenerXid(idBuscado)
        return new ModeloDtoProds(Dto)
    }

    async guardarProductosBD(nuevoElemento) {
        await this.#dao.guardar(ProductosDTO(nuevoElemento))
    }

    async eliminarProductosXid(idBuscado) {
        const eliminado = await this.#dao.eliminarXid(idBuscado)
        return new ModeloDtoProds(eliminado)
    }

    async eliminarTodosProductos() {
        await this.#dao.eliminarTodos()
    }
}

export default { RepositorioProd }


