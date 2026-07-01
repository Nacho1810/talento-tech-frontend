import { agregarProductoAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

console.log("JavaScript cargado correctamente");

export const renderizarProductosData = () => {

    const contenedorProductos = document.getElementById("contenedor-productos");
    contenedorProductos.innerHTML = "";

    fetch("https://fakestoreapi.com/products")
        .then((respuesta) => respuesta.json())
        .then((productos) => productos
            .forEach((producto) => {
                const tarjetaProducto = document.createElement("article");
                tarjetaProducto.classList.add("card");

                const nombre = document.createElement("h3");
                nombre.textContent = producto.title;

                const img = document.createElement("img");
                img.src = `${producto.image}`
                img.alt = producto.title;

                const precio = document.createElement("div");
                precio.classList.add("div-price")
                precio.textContent = `$${producto.price.toLocaleString()}`;
                
                const descripcion = document.createElement("p");
                descripcion.textContent = producto.description;

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
        .catch((error) => {
            console.log(error);
        });
};

document.addEventListener("DOMContentLoaded", () => {
    renderizarProductosData();
    const carrito = obtenerCarrito();
    actualizarContador(carrito)
})
