
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
        return this.elementos
    }

    obtenerXid(id) {
        return (this.elementos[this.#obtenerIndice(id)])
    }

    guardar(elemento) {
        this.elementos.push(elemento)
        return elemento
    }

    actualizar(id, nuevosdatos) {
        const index = this.#obtenerIndice(id)
        const actualizado = { ...this.elementos[index], ...nuevosdatos }
        this.elementos.splice(index, 1, actualizado)
        return actualizado
    }

    eliminarXid(id) {
        const [eliminado] = this.elementos.splice(this.#obtenerIndice(id), 1)
        return eliminado
    }

    eliminarTodos() {
        this.elementos = []
    }
}

export { ContenedorMemoria };