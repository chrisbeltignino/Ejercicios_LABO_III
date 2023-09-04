"use strict";
/////////////////////         EJERCICIO 3       ////////////////////////
function mostrarValor(num, texto) {
    if (texto) {
        for (let i = 0; i < num; i++) {
            console.log(texto);
        }
    }
    else {
        console.log(`Valor inverso: ${-num}`);
    }
}
mostrarValor(3, "Hola");
mostrarValor(5);
//# sourceMappingURL=Ejercicio_3.js.map