function ejecutarDespues(callback, tiempo) {
  setTimeout(callback, tiempo);
}

ejecutarDespues(() => {
  console.log("Han pasado 2 segundos");
}, 2000);