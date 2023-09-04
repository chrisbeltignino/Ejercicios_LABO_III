"use strict";
/////////////////////         EJERCICIO 7       ////////////////////////
function esPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function mostrarPrimos() {
    let contador = 0;
    let numeros = 2;
    while (contador < 20) {
        if (esPrimo(numeros)) {
            console.log(numeros);
            contador++;
        }
        numeros++;
    }
}
mostrarPrimos();
//# sourceMappingURL=Ejercicio_7.js.map