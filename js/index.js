import { agregarProductoAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

console.log("JavaScript cargado correctamente");

export const renderizarProductos = () => {

    const contenedorProductos = document.getElementById("contenedor-productos");
    contenedorProductos.innerHTML = "";

    fetch("../data/productos.json")
        .then((respuesta) => respuesta.json())
        .then((productos) => productos
            .forEach((producto) => {
                const tarjetaProducto = document.createElement("article");
                tarjetaProducto.classList.add("card");

                const nombre = document.createElement("h3");
                nombre.textContent = producto.nombre;

                const img = document.createElement("img");
                img.src = `./${producto.img}`
                img.alt = producto.nombre;

                const precio = document.createElement("div");
                precio.classList.add("div-price")
                precio.textContent = `$${producto.precio.toLocaleString()}`;
                
                const descripcion = document.createElement("p");
                descripcion.textContent = producto.descripcion;

                const boton = document.createElement("button");
                boton.classList.add("btn");
                boton.textContent = "Agregar al carrito";
                boton.addEventListener("click", () => {
                    agregarProductoAlCarrito(producto);
                })

                tarjetaProducto.appendChild(nombre);
                tarjetaProducto.appendChild(img);
                tarjetaProducto.appendChild(precio);
                tarjetaProducto.appendChild(descripcion);
                tarjetaProducto.appendChild(boton);

                contenedorProductos.appendChild(tarjetaProducto);
            }))
        .catch();

};

document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
    const carrito = obtenerCarrito();
    actualizarContador(carrito)
})
