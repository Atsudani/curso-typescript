"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    numbers.forEach(arreglo => {
        console.log(arreglo);
    });
    const miArreglo = [1, 2, 3, 4, 5, 'hola', true];
    miArreglo.forEach(elemento => {
        console.log(elemento.toString());
    });
})();
