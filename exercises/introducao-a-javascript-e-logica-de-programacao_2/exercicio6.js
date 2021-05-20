let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let quantImpar = 0;

for(let number of numbers) {
  if ((number % 2) != 0) {
    quantImpar++;
  }
}

quantImpar ? console.log(`A quantidade de ímpar é: ${quantImpar}`) : console.log("nenhum valor ímpar encontrado");