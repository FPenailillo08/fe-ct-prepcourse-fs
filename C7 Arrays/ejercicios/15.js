function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let indiceMayor = 0
  for (i = 0; i < array.length; i++){
    if (array[i] > array[indiceMayor]){
      indiceMayor = i
    }
  }
  return indiceMayor
}
var elementoDelArray=[11,200,3,45]
console.log(encontrarIndiceMayor(elementoDelArray))
module.exports = encontrarIndiceMayor;
