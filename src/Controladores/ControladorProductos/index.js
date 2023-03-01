
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Controlador Productos |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { RepositorioProd } from "../../Repositorios/index.js";
import { FECHA_UTILS, ERRORES_UTILS, JOI_VALIDADOR, LOGGER_UTILS } from "../../Utilidades/index.js";
import { logger } from '../../Configuracion/logger.js';


const obtenerTodos = async (solicitud, respuesta) => {
    try {
        const producto = await RepositorioProd.obtenerTodosProductos();

        if (!producto) return logger.error({ error: ERRORES_UTILS.MESSAGES.ERROR_PRODUCTO });

        respuesta.send(producto);
    } catch (error) {
        respuesta.send({ error, error: "Error al obtener los productos solicitados" })
    }
};

const obtenerXid = async (solicitud, respuesta) => {
    try {
        const { id } = solicitud.params;

        const producto = await RepositorioProd.obtenerProductosXid(id);

        respuesta.send(producto);
    } catch (error) {
        respuesta.send({ error, error: "Error al obtener el producto solicitados" })
    }
};

const crearProducto = async (solicitud, respuesta) => {
    try {
        const { titulo, descripcion, codigo, imagen, precio, stock } = solicitud.body;

        const nuevoProducto = await JOI_VALIDADOR.producto.validateAsync({
            titulo, descripcion, codigo, imagen, precio, stock,
            timestamp: FECHA_UTILS.getTimestamp(),
        });

        const productoCreado = await RepositorioProd.guardarProductosBD(nuevoProducto);

        respuesta.send(productoCreado);
    } catch (error) {
        await LOGGER_UTILS.addLog(error);
        respuesta.send({ error, error: "Error al crear el producto solicitado" })
    }
};

const actualizarProducto = async (solicitud, respuesta) => {
    try {
        const { id } = solicitud.params;

        const { titulo, descripcion, codigo, stock,
            precio, imagen, timestamp } = solicitud.body;

        const productoValidado = await JOI_VALIDADOR.productoJoi.validateAsync({
            titulo, descripcion, codigo, imagen, precio, stock, timestamp
        });

        const productoActualizado = RepositorioProd.actualizarProductosXid({ productoValidado }, id)

        respuesta.send(`${productoActualizado}, Producto actualizado con exito`)
    } catch (error) {
        respuesta.send(`${error}, Error al actualizar el producto solicitado`)
    }
}

const eliminarXid = async (solicitud, respuesta) => {
    try {
        const { id } = solicitud.params;

        await RepositorioProd.eliminarProductosXid(id);

        respuesta.send({ success: true });
    } catch (error) {
        respuesta.send({ error, error: "Error al eliminar el producto solicitado" })
    }
};

const eliminarTodos = async (solicitud, respuesta) => {
    try {
        await RepositorioProd.eliminarTodosProductos();

        respuesta.send({ success: true });
    } catch (error) {
        respuesta.send({ error, error: "Error al eliminar los productos solicitados" })
    }
};

export const controladorProductos = {
    obtenerTodos,
    obtenerXid,
    crearProducto,
    actualizarProducto,
    eliminarXid,
    eliminarTodos
};

