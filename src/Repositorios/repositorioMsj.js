
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Mensajes |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { DaoFactoryMsjs } from '../Dao/daoFactories/index.js';
import { MensajesDTO } from '../Dto/index.js';
import { ModeloDtoMsjs } from '../Modelos/modeloMensajes.js';


class RepositorioMsj {
    #daoMsjs

    constructor() {
        this.#daoMsjs = DaoFactoryMsjs.obtenerDao()
    }

    async obtenerTodosMensajes() {
        const elementos = await this.#daoMsjs.obtenerTodos()
        return MensajesDTO(elementos.map(item => new ModeloDtoMsjs(MensajesDTO(item))))
    }

    async obtenerMensajesXid(idBuscado) {
        const mensaje = await this.#daoMsjs.obtenerXid(idBuscado)
        return new ModeloDtoMsjs(MensajesDTO(mensaje))
    }

    async guardarMensajesBD(nuevoElemento) {
        await this.#daoMsjs.guardar(MensajesDTO(nuevoElemento))
    }

    async actualizarMensajes(idBuscado, datos) {
        const actualizado = await this.#daoMsjs.actualizar((idBuscado, datos))
        return new ModeloDtoMsjs(MensajesDTO(actualizado))
    }

    async eliminarMensajesXid(idBuscado) {
        const eliminado = await this.#daoMsjs.eliminarXid(idBuscado)
        return eliminado
    }

    async eliminarTodosMensajes() {
        await this.#daoMsjs.eliminarTodos()
    }
}

export { RepositorioMsj };

