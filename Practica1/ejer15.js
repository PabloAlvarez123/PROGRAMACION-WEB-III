// Función que recibe un callback (error, resultado)
function leerArchivo(ruta, callback) {
  setTimeout(() => {
    if (ruta === "existe.txt") {
      callback(null, "Contenido del archivo");
    } else {
      callback("Archivo no encontrado");
    }
  }, 1000);
}

leerArchivo("existe.txt", (error, datos) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Resultado con callback:", datos);
  }
});

// Convertimos la función de callback a una versión con promesas
function leerArchivoPromesa(ruta) {
  return new Promise((resolve, reject) => {
    leerArchivo(ruta, (error, datos) => {
      if (error) {
        reject(error);
      } else {
        resolve(datos);
      }
    });
  });
}
