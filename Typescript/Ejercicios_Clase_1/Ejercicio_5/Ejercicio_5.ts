/////////////////////         EJERCICIO 5       ////////////////////////

const nombre = "cHriSTian";
const apellido = "tignino";

function mostrarNombreApellido(nombre:string , apellido:string){
    console.log(`${apellido.toUpperCase()}, ${nombre.charAt(0).toUpperCase()}${nombre.slice(1).toLowerCase()}`);
}

mostrarNombreApellido(nombre, apellido);