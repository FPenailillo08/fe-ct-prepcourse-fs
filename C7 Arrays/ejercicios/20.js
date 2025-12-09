function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (i = 0; i < array.length; i++){
    if (array[i] !== array[0]){
      return false
    }
  }
  return true
}
var elementoDelArray=[1,2,2,4]
console.log(todosIguales(elementoDelArray))
module.exports = todosIguales;
