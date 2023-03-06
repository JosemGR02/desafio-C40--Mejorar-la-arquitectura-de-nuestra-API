
import fs from 'fs';
import { logger } from '../Configuracion/logger.js';


class ContenedorFileSystem {

    #listo = false

    constructor(ruta) {
        this.ruta = ruta
        this.elementos = [];
    }

    async iniciar() {
        try {
            await fs.promises.readFile(this.ruta, 'utf-8')
            this.#listo = true
            logger.info('Iniciando el contenedor en Filesystem')
        } catch (error) {
            await fs.promises.writeFile(this.ruta, '[]')
            this.#listo = true
            logger.info('Iniciando el contenedor en Filesystem')
        }
    }

    desconectar() {
        logger.info('el contenedor en Filesystem ha sido desconectado')
    }

    #chequearListo() {
        if (!this.#listo) throw new Error('INTERNAL_ERROR: Dao no esta conectado!')
    }

    #obtenerIndice(id) {
        return this.elementos.findIndex(elemento => elemento.id === id)
    }

    async #leerArchivo() {
        this.#chequearListo()
        const texto = await fs.promises.readFile(this.ruta, 'utf-8')
        this.elementos = JSON.parse(texto)
    }

    async #escribirArchivo() {
        this.#chequearListo()
        const texto = JSON.stringify(this.elementos, null, 2)
        await fs.promises.writeFile(this.ruta, texto)
    }

    async obtenerTodos() {
        await this.#leerArchivo()
        return usandoDTO(this.elementos)
    }

    async obtenerXid(id) {
        await this.#leerArchivo()
        return usandoDTO(this.elementos[this.#obtenerIndice(id)])
    }

    async guardar(elemento) {
        await this.#leerArchivo()
        this.elementos.push(elemento)
        await this.#escribirArchivo()
        return usandoDTO(elemento)
    }

    async actualizar(id, nuevosdatos) {
        await this.#leerArchivo()
        const index = this.#obtenerIndice(id)
        const actualizado = { ...this.elementos[index], ...nuevosdatos }
        this.elementos.splice(index, 1, actualizado)
        await this.#escribirArchivo()
        return usandoDTO(actualizado)
    }

    async eliminarXid(id) {
        await this.#leerArchivo()
        const [eliminado] = this.elementos.splice(this.#obtenerIndice(id), 1)
        await this.#escribirArchivo()
        return usandoDTO(eliminado)
    }

    async eliminarTodos() {
        this.elementos = [];
        await this.#escribirArchivo()
    }
}


export { ContenedorFileSystem };