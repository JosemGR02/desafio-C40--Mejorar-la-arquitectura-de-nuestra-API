
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Ruta Carrito Compra |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { Router } from "express";
import { controladorCarritos } from '../../Controladores/index.js';


const ruta = Router();

ruta.get("/compra", (solicitud, respuesta) => { respuesta.render("view/cart"); });

ruta.get('/:id', controladorCarritos.obtenerCarritoXid);
ruta.get('/:id/productos', controladorCarritos.obtenerTodosProdsCarrito);

ruta.post('/', controladorCarritos.crearCarrito);
// ruta.put('/:id/productos/:id', controladorCarritos.actualizarProdsCarrito);
ruta.post('/compra', controladorCarritos.procesarPedido);

ruta.delete('/:id/productos/:id', controladorCarritos.eliminarProdCarrito);
ruta.delete('/', controladorCarritos.eliminarCarritoXid);

export { ruta as RutaCarrito };
