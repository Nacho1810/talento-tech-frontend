import { guardarCarrito, obtenerCarrito } from "./storage.js"
import { actualizarContador, mostrarMensaje } from "./ui.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";

export const renderizarProductosDelCarrito = () => {

    const contenedorCarrito = document.getElementById("contenedor-carrito");
    contenedorCarrito.innerHTML = "";
    const accionesCarrito = document.getElementById("acciones-carrito");
    accionesCarrito.innerHTML = "";

    const productosCarrito = obtenerCarrito();
    if (!productosCarrito.length) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Tu carrito está vacío.";
        contenedorCarrito.appendChild(mensaje);
        return;
    }
    let sumaPrecioProductos = 0;

    productosCarrito.forEach((producto, i) => {
        const productoCarrito = document.createElement("article");
        productoCarrito.classList.add("cardCarrito");

        const nombre = document.createElement("h3");
        nombre.textContent = producto.title;

        const img = document.createElement("img");
        img.src = `${producto.image}`
        img.alt = producto.title;

        const precio = document.createElement("div");
        precio.classList.add("div-price")
        precio.textContent = `$${producto.price.toLocaleString()}`;
        sumaPrecioProductos += producto.price;

        const boton = document.createElement("button");
        boton.classList.add("btn");
        boton.textContent = "Eliminar del carrito";
        boton.addEventListener("click", () => {
            eliminarProducto(i);
            renderizarProductosDelCarrito();
        })

        productoCarrito.appendChild(nombre);
        productoCarrito.appendChild(img);
        productoCarrito.appendChild(precio);
        productoCarrito.appendChild(boton);

        contenedorCarrito.appendChild(productoCarrito);
    });

    const btnVaciarCarrito = document.createElement("button");
    btnVaciarCarrito.textContent = "Vaciar Carrito"
    btnVaciarCarrito.classList.add("btn", "background-secondary");
    btnVaciarCarrito.addEventListener("click", () => {
        vaciarCarritoStorage();
        renderizarProductosDelCarrito();
        actualizarContador(obtenerCarrito());
    });
    btnVaciarCarrito.addEventListener("click", () => {
        vaciarCarrito();
        renderizarProductosDelCarrito();
        actualizarContador(obtenerCarrito())
    })
    document.getElementById("acciones-carrito").appendChild(btnVaciarCarrito)

    const precioTotal = document.createElement("span");
    precioTotal.textContent = `Total: $${sumaPrecioProductos.toFixed(2)}`;
    precioTotal.classList.add("precio-total");
    document.getElementById("acciones-carrito").appendChild(precioTotal);

    const btnFinalizarCompra = document.createElement("button");
    btnFinalizarCompra.textContent = "Pasar a Finalizar Compra"
    btnFinalizarCompra.classList.add("btn");
    document.getElementById("acciones-carrito").appendChild(btnFinalizarCompra)


};

document.addEventListener("DOMContentLoaded", () => {
    renderizarProductosDelCarrito();
    const carrito = obtenerCarrito();
    actualizarContador(carrito)
})


