/////////////////////         EJERCICIO 9       ////////////////////////

function calcularFactorial1(num: number): number{
    if(num === 0 || num === 1){
        return 1;
    }
    return num * calcularFactorial1(num - 1);
}

function mostrarFactorialOcubo(num: number) {
    if (num >= 0) {
      console.log(`El factorial de ${num} es ${calcularFactorial1(num)}`);
    } else {
      console.log(`El cubo de ${num} es ${num ** 3}`);
    }
  }
  
  mostrarFactorialOcubo(4);
  mostrarFactorialOcubo(-3);