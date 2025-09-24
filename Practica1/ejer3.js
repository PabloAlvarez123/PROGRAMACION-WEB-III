function ParEImpar(numeros) {
  const resultado = { pares: [], impares: [] };
  let Pares = 0;
  let Impares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      resultado.pares[Pares] = numeros[i];
      Pares++;
    } else {
      resultado.impares[Impares] = numeros[i];
      Impares++;
    }
  }

  return resultado;
}

console.log(ParEImpar([1, 2, 3, 4, 5, 6]));