
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Usuarios |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { DaoFactory } from '../Dao/daoFactory.js';
import { UsuariosDTO } from '../Dto/index.js';
import { ModeloDtoUsers } from '../Modelos/modeloUsuarios.js';


class RepositorioUser {
    #dao

    constructor() {
        this.#dao = DaoFactory.obtenerDAO()
    }

    async obtenerTodosUsuarios() {
        const elementos = await this.#dao.obtenerTodos()
        return elementos.map(item => new ModeloDtoUsers(item))
    }

    async obtenerUsuariosXid(idBuscado) {
        const Dto = await this.#dao.obtenerXid(idBuscado)
        return new ModeloDtoUsers(Dto)
    }

    async guardarUsuariosBD(nuevoElemento) {
        await this.#dao.guardar(UsuariosDTO(nuevoElemento))
    }

    async eliminarUsuariosXid(idBuscado) {
        const eliminado = await this.#dao.eliminarXid(idBuscado)
        return new ModeloDtoUsers(eliminado)
    }

    async eliminarTodosUsuarios() {
        await this.#dao.eliminarTodos()
    }
}

export { RepositorioUser };

