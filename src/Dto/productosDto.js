
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| DTO - Productos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export class Productos {
    constructor({ id, titulo, descripcion, codigo, imagen, precio, stock, timestamp }) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.codigo = codigo
        this.imagen = imagen
        this.precio = precio
        this.stock = stock
        this.timestamp = timestamp
    }
}

export function ProductosDTO(elemento) {
    if (Array.isArray(elemento))
        return elemento.map(item => new Productos(item))
    else
        return new Productos(elemento)
}

