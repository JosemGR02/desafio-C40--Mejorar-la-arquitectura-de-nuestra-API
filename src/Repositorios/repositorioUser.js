
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Repositorio - Usuarios |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { DaoFactoryUsers } from '../Dao/daoFactories/index.js';
import { UsuariosDTO } from '../Dto/index.js';
import { ModeloDtoUsers } from '../Modelos/modeloUsuarios.js';


class RepositorioUser {
    #daoUser

    constructor() {
        this.#daoUser = DaoFactoryUsers.obtenerDao()
    }

    async obtenerTodosUsuarios() {
        const elementos = await this.#daoUser.obtenerTodos()
        return elementos.map(item => new ModeloDtoUsers(UsuariosDTO(item)))
    }

    async obtenerUsuariosXid(idBuscado) {
        const usuario = await this.#daoUser.obtenerXid(idBuscado)
        return new ModeloDtoUsers(UsuariosDTO(usuario))
    }

    async guardarUsuariosBD(nuevoElemento) {
        await this.#daoUser.guardar(UsuariosDTO(nuevoElemento))
    }

    async actualizarUsuariosBD(idBuscado, datos) {
        const actualizado = await this.#daoUser.actualizar((idBuscado, datos))
        return new ModeloDtoUsers(UsuariosDTO(actualizado))
    }

    async eliminarUsuariosXid(idBuscado) {
        const eliminado = await this.#daoUser.eliminarXid(idBuscado)
        return eliminado
    }

    async eliminarTodosUsuarios() {
        await this.#daoUser.eliminarTodos()
    }
}

export { RepositorioUser };
