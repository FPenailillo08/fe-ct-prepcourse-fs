function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  suma=0
  i=0
  while (i < arrayOfNums.length){
    suma += arrayOfNums[i++]
  }
  return suma 
}
var elementoDelArray=[1,2,3,4]
console.log(agregarNumeros(elementoDelArray))
module.exports = agregarNumeros;
