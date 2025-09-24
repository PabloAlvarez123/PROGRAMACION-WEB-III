function promesaExito() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Han pasado 3 segundos");
    }, 3000); 
  });
}

promesaExito().then(mensaje => {
  console.log(mensaje);
});