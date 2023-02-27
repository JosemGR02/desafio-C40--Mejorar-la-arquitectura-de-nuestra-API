
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Modelos - Productos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

class ModeloDtoProds {
    #titulo
    #descripcion
    #codigo
    #imagen
    #precio
    #stock
    #timestamp

    constructor({ titulo, descripcion, codigo, imagen, precio, stock, timestamp }) {
        this.titulo = titulo
        this.descripcion = descripcion
        this.codigo = codigo
        this.imagen = imagen
        this.precio = precio
        this.stock = stock
        this.timestamp = timestamp
    }

    get titulo() { return this.#titulo }

    set titulo(titulo) {
        if (!titulo) throw new Error('"titulo" es un campo requerido')
        this.#titulo = titulo
    }

    get descripcion() { return this.#descripcion }

    set descripcion(descripcion) {
        if (!descripcion) throw new Error('"descripcion" es un campo requerido')
        this.#descripcion = descripcion
    }

    get codigo() { return this.#codigo }

    set codigo(codigo) {
        if (!codigo) throw new Error('"codigo" es un campo requerido')
        if (isNaN(codigo)) throw new Error('"codigo" es un campo de caracteres exclusivamente numéricos')
        this.#codigo = codigo
    }

    get imagen() { return this.#imagen }

    set imagen(imagen) {
        if (!imagen) throw new Error('"imagen" es un campo requerido')
        this.#imagen = imagen
    }

    get precio() { return this.#precio }

    set precio(precio) {
        if (!precio) throw new Error('"precio" es un campo requerido')
        if (isNaN(precio)) throw new Error('"precio" es un campo de caracteres exclusivamente numéricos')
        this.#precio = precio
    }

    get stock() { return this.#stock }

    set stock(stock) {
        if (!stock) throw new Error('"stock" es un campo requerido')
        if (isNaN(stock)) throw new Error('"stock" es un campo de caracteres exclusivamente numéricos')
        this.#stock = stock
    }

    get timestamp() { return this.#timestamp }

    set timestamp(timestamp) {
        if (!timestamp) throw new Error('"timestamp" es un campo requerido')
        this.#timestamp = timestamp
    }
}

export default { ModeloDtoProds };


