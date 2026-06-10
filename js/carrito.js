import { guardarCarrito, obtenerCarrito, vaciarCarritoStorage } from "./storage.js"
import { actualizarContador, mostrarMensaje } from "./ui.js";
import { eliminarProducto } from "./funcionesCarrito.js";

export const renderizarProductosDelCarrito = () => {

    const contenedorCarrito = document.getElementById("contenedor-carrito");
    contenedorCarrito.innerHTML = "";

    const productosCarrito = obtenerCarrito();
    productosCarrito.forEach(producto => {
        const productoCarrito = document.createElement("article");
        productoCarrito.classList.add("card");

        const img = document.createElement("img");
        img.src = `../${producto.img}`
        img.alt = producto.nombre;

        const precio = document.createElement("div");
        precio.classList.add("div-price")
        precio.textContent = `$${producto.precio.toLocaleString()}`;

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const boton = document.createElement("button");
        boton.classList.add("btn");
        boton.textContent = "Eliminar del carrito";
        boton.addEventListener("click", () => {
            eliminarProducto(productosCarrito.indexOf(producto));
            renderizarProductosDelCarrito();
        })  

        productoCarrito.appendChild(nombre);
        productoCarrito.appendChild(img);
        productoCarrito.appendChild(precio);
        productoCarrito.appendChild(boton);

        contenedorCarrito.appendChild(productoCarrito);
    });
};

document.addEventListener("DOMContentLoaded", () => {
        renderizarProductosDelCarrito();
        const carrito = obtenerCarrito();
        actualizarContador(carrito)
    })

document.getElementById("btn-vaciar-carrito").addEventListener("click", () => {
    vaciarCarritoStorage();
    renderizarProductosDelCarrito();
    actualizarContador(obtenerCarrito());
});