
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Modelos - Carritos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

class ModeloDtoCarts {
    #timestamp
    #usuario
    #productos

    constructor({ timestamp, usuario, productos }) {
        this.timestamp = timestamp
        this.usuario = usuario
        this.productos = productos
    }

    get timestamp() { return this.#timestamp }

    set timestamp(timestamp) {
        if (!timestamp) throw new Error('"timestamp" es un campo requerido')
        this.#timestamp = timestamp
    }

    get usuario() { return this.#usuario }

    set usuario(usuario) {
        if (!usuario) throw new Error('"usuario" es un campo requerido')
        this.#usuario = usuario
    }

    get productos() { return this.#productos }

    set productos(productos) {
        if (!productos) throw new Error('"productos" es un campo requerido')
        this.#productos = productos
    }
}

export { ModeloDtoCarts };


