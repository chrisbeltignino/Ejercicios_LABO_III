/////////////////////         EJERCICIO 6       ////////////////////////

function calcularCubo(num: number): number {
    return num ** 3; 
}

function mostrarCubo(num: number) {
    const cubo = calcularCubo(num);
    console.log(`El cubo de ${num} es ${cubo}`);
}

mostrarCubo(3);