/////////////////////         EJERCICIO 3       ////////////////////////

function mostrarValor(num: number, texto?: string){
    if(texto){
        for(let i = 0; i < num; i++){
            console.log(texto);
        }
    }else{
        console.log(`Valor inverso: ${-num}`);
    }
}

mostrarValor(3, "Hola");
mostrarValor(5);