function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  //return array.filter(num => num % 2 === 0);
  const pares=[]
  for (i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
     pares.push(array[i])
    }
  }
  return pares
}
var elementoDelArray=[1,2,3,4]
console.log(filtrarNumerosPares(elementoDelArray))
module.exports = filtrarNumerosPares;
