
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Modelos - Usuarios |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

class ModeloDtoUsers {
    #nombre
    #edad
    #usuario
    #avatar
    #contrasena
    #telefono
    #direccion

    constructor({ nombre, edad, usuario, avatar, contrasena, telefono, direccion }) {
        this.nombre = nombre
        this.edad = edad
        this.usuario = usuario
        this.avatar = avatar
        this.contrasena = contrasena
        this.telefono = telefono
        this.direccion = direccion
    }

    get nombre() { return this.#nombre }

    set nombre(nombre) {
        if (!nombre) throw new Error('"nombre" es un campo requerido')
        this.#nombre = nombre
    }

    get usuario() { return this.#usuario }

    set usuario(usuario) {
        if (!usuario) throw new Error('"usuario" es un campo requerido')
        this.#usuario = usuario
    }

    get edad() { return this.#edad }

    set edad(edad) {
        if (!edad) throw new Error('"edad" es un campo requerido')
        if (isNaN(edad)) throw new Error('"edad" es un campo de caracteres exclusivamente numéricos')
        this.#edad = edad
    }

    get contrasena() { return this.#contrasena }

    set contrasena(contrasena) {
        if (!contrasena) throw new Error('"contrasena" es un campo requerido')
        if (isNaN(contrasena)) throw new Error('"contrasena" es un campo de caracteres exclusivamente numéricos')
        this.#contrasena = contrasena
    }

    get avatar() { return this.#avatar }

    set avatar(avatar) {
        if (!avatar) throw new Error('"avatar" es un campo requerido')
        this.#avatar = avatar
    }

    get telefono() { return this.#telefono }

    set telefono(telefono) {
        if (!telefono) throw new Error('"telefono" es un campo requerido')
        if (isNaN(telefono)) throw new Error('"telefono" es un campo de caracteres exclusivamente numéricos')
        this.#telefono = telefono
    }

    get direccion() { return this.#direccion }

    set direccion(direccion) {
        if (!direccion) throw new Error('"direccion" es un campo requerido')
        this.#direccion = direccion
    }
}

export default { ModeloDtoUsers }; 