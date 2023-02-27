
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Carritos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { DaoFactory } from '../Dao/daoFactory.js';
import { CarritosDTO } from '../Dto/index.js';
import { ModeloDtoCarts } from '../Modelos/modeloCarritos.js';


class RepositorioCart {
    #dao

    constructor() {
        this.#dao = DaoFactory.obtenerDAO()
    }

    async obtenerTodosCarritos() {
        const elementos = await this.#dao.obtenerTodos()
        return elementos.map(item => new ModeloDtoCarts(item))
    }

    async obtenerCarritoXid(idBuscado) {
        const Dto = await this.#dao.obtenerXid(idBuscado)
        return new ModeloDtoCarts(Dto)
    }

    async guardarCarritoBD(nuevoElemento) {
        await this.#dao.guardar(CarritosDTO(nuevoElemento))
    }

    async eliminarCarritoXid(idBuscado) {
        const eliminado = await this.#dao.eliminarXid(idBuscado)
        return new ModeloDtoCarts(eliminado)
    }

    async eliminarTodosCarritos() {
        await this.#dao.eliminarTodos()
    }
}

export default { RepositorioCart }