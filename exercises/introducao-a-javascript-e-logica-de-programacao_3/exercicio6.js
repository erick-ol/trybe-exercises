let n = 23;
let quantDivisoes = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    quantDivisoes++;
  }
}

if (quantDivisoes == 2) {
  console.log("É primo.")
} else {
  console.log("Não é primo");
}