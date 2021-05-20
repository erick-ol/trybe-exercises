let valorCusto = 20;
let valorVenda = 30;

if (valorCusto <= 0 || valorVenda <= 0) {
  console.log("Valroes inválidos");
} else {
  let impostoSobreOCusto = (20 * valorCusto) / 100;
  let valorCustoTotal = valorCusto + impostoSobreOCusto;
  let lucro = valorVenda - valorCustoTotal;
  console.log(`O luvro do produto é: R$${lucro}`);
}