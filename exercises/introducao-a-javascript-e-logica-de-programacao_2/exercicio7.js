let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0];

for(let number of numbers) {
  if (menorNumero > number) {
    menorNumero = number;
  }
}

console.log(`Menor número é: ${menorNumero}`);