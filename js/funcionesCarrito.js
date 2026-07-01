import { guardarCarrito, obtenerCarrito, vaciarCarritoStorage } from "./storage.js"
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarProductoAlCarrito = (producto) => {
    const carrito = obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);

    actualizarContador(carrito);
    mostrarMensaje("El producto fue agregado al carrito");
};

export const eliminarProducto = (indiceProducto) => {
    const carrito = obtenerCarrito();
    carrito.splice(indiceProducto, 1);
    guardarCarrito(carrito);

    actualizarContador(carrito);
    mostrarMensaje("El producto fue eliminado del carrito");
};

export const vaciarCarrito = () => {
    vaciarCarritoStorage();

    actualizarContador([]);
    mostrarMensaje("El carrito fue vaciado");
}
