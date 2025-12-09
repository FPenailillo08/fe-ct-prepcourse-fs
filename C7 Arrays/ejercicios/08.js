function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   return array.indexOf(num)
}
var elementoDelArray=[1,2,3,4,6,7,5]
console.log(encontrarElemento(8,elementoDelArray))
module.exports = encontrarElemento;
