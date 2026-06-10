export const actualizarContador = (carrito) => {
    const contador = document.getElementById("contador-carrito")
    if (contador) {
    contador.textContent = carrito.length;
  }
};
// Va a servir cuando agregamos librerias
export const mostrarMensaje = (mensaje) => {
    alert(mensaje);
};