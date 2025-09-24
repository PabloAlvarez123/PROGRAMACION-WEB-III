function invertirTexto(texto) {
  let invertido = "";

  for (let i = texto.length - 1; i >= 0; i--) {
    invertido = invertido+texto[i];
  }
  return invertido;
}

console.log(invertirTexto("hola mundo"));