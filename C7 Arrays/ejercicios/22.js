function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const multiplos=[]
  for (i = 0; i < 11; i++){
    multiplos.push(i*6)
  }
  return multiplos
}
console.log(tablaDelSeis())
module.exports = tablaDelSeis;
