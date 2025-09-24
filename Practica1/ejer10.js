/*
Cuándo usar callbacks:
Cuando necesitas ejecutar código después de una acción simple y rápida.
Cuando el flujo no necesita manejar múltiples pasos asíncronos complejos.
Cuando no necesitas manejar errores de forma estructurada.
*/
function saludar(callback) {
  callback("Hola");
}

saludar(mensaje => console.log(mensaje));

/*
Cuándo usar promesas:
Cuando tienes operaciones asíncronas más complejas.
Cuando necesitas encadenar múltiples operaciones asíncronas.
Cuando quieres manejar errores de forma clara (.catch()).
Cuando quieres escribir código más legible usando async/await.
*/

function promesaSaludo() {
  return new Promise((resolve, reject) => {
    resolve("Hola desde promesa");
  });
}

promesaSaludo()
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));