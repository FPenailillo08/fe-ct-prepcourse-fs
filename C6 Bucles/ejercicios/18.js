function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  do {
    console.log(a);
    a++;
  } while (a<b);
  return b
}
console.log(productoEntreNúmeros(1,10))
module.exports = productoEntreNúmeros;