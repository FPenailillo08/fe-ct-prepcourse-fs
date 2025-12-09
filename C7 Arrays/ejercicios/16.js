function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  resultado=[]
 for (i = 0; i < array.length; i++){
  resultado.push(array[i]*i)
  }
  return resultado
}
var elementoDelArray=[1,2,3,4]
console.log(multiplicarElementosPorIndice(elementoDelArray))
module.exports = multiplicarElementosPorIndice;
