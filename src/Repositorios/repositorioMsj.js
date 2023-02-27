
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Mensajes |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { DaoFactory } from '../Dao/daoFactory.js';
import { MensajesDTO } from '../Dto/index.js';
import { ModeloDtoMsjs } from '../Modelos/modeloMensajes.js';


class RepositorioMsj {
    #dao

    constructor() {
        this.#dao = DaoFactory.obtenerDAO()
    }

    async obtenerTodosMensajes() {
        const elementos = await this.#dao.obtenerTodos()
        return elementos.map(item => new ModeloDtoMsjs(item))
    }

    async obtenerMensajesXid(idBuscado) {
        const Dto = await this.#dao.obtenerXid(idBuscado)
        return new ModeloDtoMsjs(Dto)
    }

    async guardarMensajesBD(nuevoElemento) {
        await this.#dao.guardar(MensajesDTO(nuevoElemento))
    }

    async eliminarMensajesXid(idBuscado) {
        const eliminado = await this.#dao.eliminarXid(idBuscado)
        return new ModeloDtoMsjs(eliminado)
    }

    async eliminarTodosMensajes() {
        await this.#dao.eliminarTodos()
    }
}

export default { RepositorioMsj }