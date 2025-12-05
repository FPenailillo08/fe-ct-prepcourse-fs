function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var i=0
  var stop=8
  do {
    i= i + 1;
    num= num + 5
  } while (i < stop )
return num
}
console.log(doWhile(5))
module.exports = doWhile;