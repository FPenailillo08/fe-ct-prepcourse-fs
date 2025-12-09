function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array
}
var elementoDelArray=[1,2,3,4]
console.log(agregarItemAlFinalDelArray(elementoDelArray,5))
module.exports = agregarItemAlFinalDelArray;
