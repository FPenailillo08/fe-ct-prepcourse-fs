function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var duplicado= array.map ((num) => {return num * 2})
  return duplicado
}
var elementoDelArray=[1,2,3,4]
console.log(duplicarElementos(elementoDelArray))
module.exports = duplicarElementos;
