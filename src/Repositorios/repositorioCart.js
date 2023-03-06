
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Carritos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { DaoFactoryCarts } from '../Dao/daoFactories/index.js';
import { CarritosDTO } from '../Dto/index.js';
import { ModeloDtoCarts } from '../Modelos/modeloCarritos.js';


class RepositorioCart {
    #daoCart

    constructor() {
        this.#daoCart = DaoFactoryCarts.obtenerDao()
    }

    async obtenerTodosCarritos() {
        const elementos = await this.#daoCart.obtenerTodos()
        return CarritosDTO(elementos.map(item => new ModeloDtoCarts(CarritosDTO(item))))
    }

    async obtenerCarritoXid(idBuscado) {
        const elemento = await this.#daoCart.obtenerXid(idBuscado)
        return new ModeloDtoCarts(CarritosDTO(elemento))
    }

    async guardarCarritoBD(nuevoElemento) {
        await this.#daoCart.guardar(CarritosDTO(nuevoElemento))
    }

    async actualizarUsuariosBD(idBuscado, datos) {
        const actualizado = await this.#daoCart.actualizar((idBuscado, datos))
        return new ModeloDtoCarts(CarritosDTO(actualizado))
    }

    async eliminarCarritoXid(idBuscado) {
        const eliminado = await this.#daoCart.eliminarXid(idBuscado)
        return eliminado
    }

    async eliminarTodosCarritos() {
        await this.#daoCart.eliminarTodos()
    }
}

export { RepositorioCart };
