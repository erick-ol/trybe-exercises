// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

let numbers = [];

for (let i = 0 ; i < 25 ; i++) {
  numbers[i] = i + 1;
}

let divisao;

for (let number of numbers) {
  divisao = number / 2;
  console.log(`O valor ${number}/2 = ${divisao}`);
}