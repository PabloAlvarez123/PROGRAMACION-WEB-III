
function obtenerNumero() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Obteniendo número...");
      resolve(10);
    }, 2000);
  });
}

function multiplicarPorDos(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Multiplicando por 2...");
      resolve(numero * 2);
    }, 1000);
  });
}

function sumarCinco(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Sumando 5...");
      resolve(numero + 5);
    }, 1000);
  });
}

obtenerNumero()
  .then(multiplicarPorDos) 
  .then(sumarCinco)       
  .then(resultadoFinal => {
    console.log("Resultado final:", resultadoFinal);
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });
