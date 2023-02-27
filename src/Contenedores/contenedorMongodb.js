
import mongoose from 'mongoose';
import { ProductosDTO } from '../Dto/index.js';
import { logger } from '../Configuracion/logger.js';


class ContenedorMongoBD {
    constructor(conexionURL) { //constructor({ nombre, schema })
        this.conexionURL = conexionURL
        this.model = mongoose.model(nombre, schema);
        // this.personas = mongoose.model('Persona', personaSchema)
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
        return ProductosDTO(respuesta)
    }

    async obtenerXid(id) {
        const respuesta = await this.model.findById(id);
        // const respuesta = await this.model.findOne({ id: id })
        return ProductosDTO(respuesta)
    }

    async obtenerUno(opciones) {
        const respuesta = await this.model.findById(opciones).lean().exec();
        // return ProductosDTO(respuesta)
        return respuesta;
    }

    async guardar(elemento) {
        await this.model.create(elemento)
        return ProductosDTO(elemento)
    }

    async actualizar(id, nuevosDatos) {
        const respuesta = await this.model.findOneAndUpdate({ id: id }, { $set: nuevosDatos })
        return ProductosDTO(respuesta)
    }

    async obtenerTelefono(numero) {
        // const respuesta = await this.model.findOne(numero).lean().exec();
        const respuesta = await this.model.find(usuario => usuario.telefono == numero);
        // const respuesta = await this.model.find(telefono => usuario.telefono == numero);
        return respuesta;
    }

    async eliminarXid(id) {
        const respuesta = await this.model.findOneAndDelete({ id: id })
        // const respuesta = await this.collection.findByIdAndDelete(id);
        return ProductosDTO(respuesta)
    }

    async eliminarTodos() {
        await this.model.deleteMany({})
    }
}

export default { ContenedorMongoBD };


// const personaSchema = new mongoose.Schema({
//     id: { type: Number },
//     nombre: { type: String },
//     apellido: { type: String },
//     dni: { type: String }
// });