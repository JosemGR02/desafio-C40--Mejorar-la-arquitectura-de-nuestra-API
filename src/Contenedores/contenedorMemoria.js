
import { ProductosDTO } from '../Dto/index.js';
import { logger } from '../Configuracion/logger.js';

class ContenedorMemoria {

    constructor() {
        this.elementos = [];
    }

    iniciar() {
        logger.info('Iniciando con el contenedor en Memoria')
    }

    desconectar() {
        logger.info('El contenedor en Memoria ha sido desconectado')
    }

    #obtenerIndice(id) {
        return this.elementos.findIndex(elemento => elemento.id === id)
    }

    obtenerTodos() {
        return asDto(this.elementos)
    }

    obtenerXid(id) {
        return ProductosDTO(this.elementos[this.#obtenerIndice(id)])
    }

    guardar(elemento) {
        this.elementos.push(elemento)
        return ProductosDTO(elemento)
    }

    actualizar(id, nuevosdatos) {
        const index = this.#obtenerIndice(id)
        const actualizado = { ...this.elementos[index], ...nuevosdatos }
        this.elementos.splice(index, 1, actualizado)
        return ProductosDTO(actualizado)
    }

    eliminarXid(id) {
        const [eliminado] = this.elementos.splice(this.#obtenerIndice(id), 1)
        return ProductosDTO(eliminado)
    }

    eliminarTodos() {
        this.elementos = []
    }
}

export default { ContenedorMemoria };