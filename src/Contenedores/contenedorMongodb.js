
import mongoose from 'mongoose';
import { logger } from '../Configuracion/logger.js';


class ContenedorMongoBD {
    constructor(conexionURL) {
        this.conexionURL = conexionURL
        this.model = mongoose.model(nombre, schema);
    }

    async iniciar() {
        await mongoose.connect(this.conexionURL)
        logger.info('Iniciando con el contenedor en MongoBD')
    }

    async desconectar() {
        await mongoose.disconnect()
        logger.info('El contenedor en MongoBD ha sido desconectado')
    }

    async obtenerTodos() {
        const respuesta = await this.model.find({})
        return respuesta
    }

    async obtenerXid(id) {
        const respuesta = await this.model.findOne({ id: id })
        return respuesta
    }

    async obtenerUno(opciones) {
        const respuesta = await this.model.findById(opciones).lean().exec();
        return respuesta
    }

    async guardar(elemento) {
        await this.model.create(elemento)
        return elemento
    }

    async actualizar(id, nuevosDatos) {
        const respuesta = await this.model.findOneAndUpdate({ id: id, $set: nuevosDatos, new: true })
        return respuesta
    }

    async eliminarXid(id) {
        const respuesta = await this.model.findOneAndDelete({ id: id })
        return respuesta
    }

    async eliminarTodos() {
        await this.model.deleteMany({})
    }
}

export { ContenedorMongoBD };
