

class ElementoMostrable {
    #ModeloDtoProds

    constructor(ModeloDtoProds) {
        this.ModeloDtoProds = ModeloDtoProds
    }

    comoTextoPlano() {
        const lines = []
        lines.push(`titulo: ${this.ModeloDtoProds.titulo}`);
        lines.push(`descripcion: ${this.ModeloDtoProds.descripcion}`);
        lines.push(`codigo: ${this.ModeloDtoProds.codigo}`);
        lines.push(`imagen: ${this.ModeloDtoProds.imagen}`);
        lines.push(`precio: ${this.ModeloDtoProds.precio}`);
        lines.push(`stock: ${this.ModeloDtoProds.stock}`);
        lines.push(`timestamp: ${this.ModeloDtoProds.timestamp}`);
        return lines.join('\n')
    }
}

export default ElementoMostrable;