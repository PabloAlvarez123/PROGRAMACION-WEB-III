function contarVocales(texto) {

  const resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];

    if (char === 'a' || char === 'A') {
      resultado.a++;
    } else if (char === 'e' || char === 'E') {
      resultado.e++;
    } else if (char === 'i' || char === 'I') {
      resultado.i++;
    } else if (char === 'o' || char === 'O') {
      resultado.o++;
    } else if (char === 'u' || char === 'U') {
      resultado.u++;
    }
  }

  return resultado;
}

console.log(contarVocales("euforia"));