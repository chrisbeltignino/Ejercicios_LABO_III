/////////////////////         EJERCICIO 11      ////////////////////////

function esPalindromo(cadena: string): boolean{
    const cadenaSinEspacios = cadena.replace(/\s/g,"").toLowerCase();
    const cadenaReversa = cadenaSinEspacios.split("").reverse().join("");
    return cadenaSinEspacios === cadenaReversa;
}

console.log(esPalindromo("holasoygerman"));
console.log(esPalindromo("La ruta nos aporto otro paso natural"));