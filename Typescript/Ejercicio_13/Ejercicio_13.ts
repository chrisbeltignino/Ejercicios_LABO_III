/////////////////////         EJERCICIO 13      ////////////////////////

// Función para descomponer un número en sus factores primos
function descomponerEnFactoresPrimos(n: number): number[] {
    const factoresPrimos = [];
    let divisor = 2;
    while (n > 1) {
        if (n % divisor === 0) {
            factoresPrimos.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factoresPrimos;
}

// Función para sumar los dígitos de un número
function sumarDigitos(numero: number): number {
    let suma = 0;
    while (numero > 0) {
        suma += numero % 10;
        numero = Math.floor(numero / 10);
    }
    return suma;
}

// Función para verificar si un número es un número de Smith
function esNumeroSmith(numero: number): boolean {
    const factoresPrimos = descomponerEnFactoresPrimos(numero);
    const sumaDigitosNumero = sumarDigitos(numero);
    const sumaDigitosFactoresPrimos = factoresPrimos.reduce((suma, factor) => suma + sumarDigitos(factor), 0);
  
    return sumaDigitosNumero === sumaDigitosFactoresPrimos;
}
  
// Ejemplo de uso de la función esNumeroSmith
const numero = 378;
if (esNumeroSmith(numero)) {
    console.log(`${numero} es un número de Smith.`);
} else {
    console.log(`${numero} no es un número de Smith.`);
}