function esPalindromo(cadena) {
  let invertida = "";

  for (let i = cadena.length - 1; i >= 0; i--) {
    invertida = invertida + cadena[i];
  }

  return cadena === invertida;
}

console.log(esPalindromo("ana"));
console.log(esPalindromo("mundo"));