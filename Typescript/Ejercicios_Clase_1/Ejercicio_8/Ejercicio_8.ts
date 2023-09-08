/////////////////////         EJERCICIO 8       ////////////////////////

function calcularFactorial(num: number): number{
    if(num === 0 || num === 1){
        return 1;
    }
    return num * calcularFactorial(num - 1);
}

console.log(`El factorial de 5 es ${calcularFactorial(5)}`);