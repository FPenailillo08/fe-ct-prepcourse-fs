function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let contador=0
  let i=0
  while (i < array.length){
    if (array[i] > 10){
      contador++
  }
  i++
}
return contador
}
var elementoDelArray=[11,2,3,45]
console.log(contarElementosMayoresA10(elementoDelArray))
module.exports = contarElementosMayoresA10;
