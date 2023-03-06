
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Modelos - Productos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

class ModeloDtoProds {
    #id
    #titulo
    #descripcion
    #codigo
    #imagen
    #precio
    #stock

    constructor({ id, titulo, descripcion, codigo, imagen, precio, stock }) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.codigo = codigo
        this.imagen = imagen
        this.precio = precio
        this.stock = stock
    }


    get id() { return this.#id }

    set id(id) {
        if (!id) console.log('falta id')
        this.#id = id
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
}

export { ModeloDtoProds };


