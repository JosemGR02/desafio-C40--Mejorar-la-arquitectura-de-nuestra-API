
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| DTO - Productos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


export class ProductosDTO {
    constructor({ titulo, descripcion, codigo, imagen, precio, stock, timestamp }) {
        this.titulo = titulo
        this.descripcion = descripcion
        this.codigo = codigo
        this.imagen = imagen
        this.precio = precio
        this.stock = stock
        this.timestamp = timestamp
    }
}

export function usandoDTO(elemento) {
    if (Array.isArray(elemento))
        return elemento.map(item => new ProdutosDTO(item))
    else
        return new ProductosDTO(elemento)
}
