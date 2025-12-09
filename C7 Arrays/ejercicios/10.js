function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  return array.find(str => str.length > 5)
}
var elementoDelArray=["Hola","Henry","Chau","Argentina"]
console.log(obtenerPrimerStringLargo(elementoDelArray))
module.exports = obtenerPrimerStringLargo;
