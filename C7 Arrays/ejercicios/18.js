function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  promedio=0
  for(i = 0; i < resultadosTest.length; i++){
    promedio += resultadosTest[i]
    }
    return promedio/resultadosTest.length
}
var elementoDelArray=[1,2,3,4]
console.log(promedioResultadosTest(elementoDelArray))
module.exports = promedioResultadosTest;
