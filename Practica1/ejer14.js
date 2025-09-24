// Funcion que devuelve una promesa
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
      if (exito) {
        resolve("Datos obtenidos correctamente");
      } else {
        reject("Error al obtener datos");
      }
    }, 1000);
  });
}

// Función que adapta promesa a callback
function obtenerDatosConCallback(callback) {
  obtenerDatos()
    .then(resultado => callback(null, resultado)) 
    .catch(error => callback(error));
}

obtenerDatosConCallback((error, resultado) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Resultado:", resultado);
  }
});
