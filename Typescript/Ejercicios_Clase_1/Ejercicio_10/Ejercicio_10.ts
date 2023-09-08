/////////////////////         EJERCICIO 10      ////////////////////////

function analizarCadena(cadena: string){
    if(cadena === cadena.toUpperCase()){
        console.log("La cadena esta formada solo por MAYUSCULAS.");
    }else if(cadena === cadena.toLowerCase()){
        console.log("La cadena esta formada solo por MINUSCULAS.");
    }else{
        console.log("La cadena esta formada por MAYUSCULAS y MINUSCULAS.");
    }
}

analizarCadena("TODOENMAYUSCULAS");
analizarCadena("todominuscula");
analizarCadena("MezclaDeMayusculasYMinusculas");