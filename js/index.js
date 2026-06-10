import { agregarProductoAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

console.log("JavaScript cargado correctamente");

const productos = [
    {id:1, nombre: "Desinfectante", img:"img/desinfectante.png", precio: 5000},
    {id:2, nombre: "Vino", img:"img/vino-dada.jpeg", precio: 5000},
    {id:3, nombre: "Figuritas", img:"img/figuritas-mundial.jpeg", precio: 5000},
    {id:4, nombre: "Pritty", img:"img/pritty-limon.jpeg", precio: 5000},
    {id:5, nombre: "Yerba Mate", img:"img/yerba-mate.jpg", precio: 5000},
];

export const renderizarProductos = () => {

    const contenedorProductos = document.getElementById("contenedor-productos");
    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {
        const tarjetaProducto = document.createElement("article");
        tarjetaProducto.classList.add("card");

        const img = document.createElement("img");
        img.src = `./${producto.img}`
        img.alt = producto.nombre;

        const precio = document.createElement("div");
        precio.classList.add("div-price")
        precio.textContent = `$${producto.precio.toLocaleString()}`;

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const boton = document.createElement("button");
        boton.classList.add("btn");
        boton.textContent = "Agregar al carrito";
        boton.addEventListener("click", () => {
            agregarProductoAlCarrito(producto);
        })

        tarjetaProducto.appendChild(nombre);
        tarjetaProducto.appendChild(img);
        tarjetaProducto.appendChild(precio);
        tarjetaProducto.appendChild(boton);

        contenedorProductos.appendChild(tarjetaProducto);
    });
};

document.addEventListener("DOMContentLoaded", () => {
        renderizarProductos();
        const carrito = obtenerCarrito();
        actualizarContador(carrito)
    })
