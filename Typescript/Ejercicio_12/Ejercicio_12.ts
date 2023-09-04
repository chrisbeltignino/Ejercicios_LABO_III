/////////////////////         EJERCICIO 12      ////////////////////////

function determinarSigno(fechaNacimiento: string) {
    const [dia, mes] = fechaNacimiento.split("-").map(Number);
  
    if (
      (mes === 3 && dia >= 21) ||
      (mes === 4 && dia <= 19)
    ) {
      console.log("Aries");
    } else if (
      (mes === 4 && dia >= 20) ||
      (mes === 5 && dia <= 20)
    ) {
      console.log("Tauro");
    } else if (
      (mes === 5 && dia >= 21) ||
      (mes === 6 && dia <= 20)
    ) {
      console.log("Géminis");
    } else if (
      (mes === 6 && dia >= 21) ||
      (mes === 7 && dia <= 22)
    ) {
      console.log("Cáncer");
    } else if (
      (mes === 7 && dia >= 23) ||
      (mes === 8 && dia <= 22)
    ) {
      console.log("Leo");
    } else if (
      (mes === 8 && dia >= 23) ||
      (mes === 9 && dia <= 22)
    ) {
      console.log("Virgo");
    } else if (
      (mes === 9 && dia >= 23) ||
      (mes === 10 && dia <= 22)
    ) {
      console.log("Libra");
    } else if (
      (mes === 10 && dia >= 23) ||
      (mes === 11 && dia <= 21)
    ) {
      console.log("Escorpio");
    } else if (
      (mes === 11 && dia >= 22) ||
      (mes === 12 && dia <= 21)
    ) {
      console.log("Sagitario");
    } else if (
      (mes === 12 && dia >= 22) ||
      (mes === 1 && dia <= 19)
    ) {
      console.log("Capricornio");
    } else if (
      (mes === 1 && dia >= 20) ||
      (mes === 2 && dia <= 18)
    ) {
      console.log("Acuario");
    } else {
      console.log("Piscis");
    }
}

determinarSigno("11-01");
determinarSigno("17-8");