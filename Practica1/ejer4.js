function encontrarMayorMenor(numeros) {
  if (numeros.length === 0) {
    return { mayor: [], menor: [] };
  }

  let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  return { mayor, menor };
}

console.log(encontrarMayorMenor([4, 7, 1, 9, 0, 5]));