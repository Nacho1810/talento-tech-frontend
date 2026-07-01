const KEY = "carrito";

export const guardarCarrito = (carrito) =>{
    //Sobreescribe el carrito en el localStorage con la última versión del carrito
    localStorage.setItem(KEY, JSON.stringify(carrito));
}

export const obtenerCarrito = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY);
}