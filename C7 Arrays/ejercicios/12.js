function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var mayuscula= array.map((string) => {return string.toLocaleUpperCase()})
  return mayuscula
}
var elementoDelArray=["hola","henry","chau","argentina"]
console.log(convertirStringAMayusculas(elementoDelArray))
module.exports = convertirStringAMayusculas;
