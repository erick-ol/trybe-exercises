const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const weight = readline.questionFloat('Qual seu peso em kg? ');
const height = readline.questionFloat('Qual sua altura em cm? ');
let imcSituation = '';

imc = weight / ((height / 100) ^ 2);

if (imc < 18.5) {
  imcSituation = 'Abaixo do peso (magreza)';
} else if (imc >= 18.5 && imc < 25) {
  imcSituation = 'Peso normal';
} else if (imc >= 25 && imc < 30) {
  imcSituation = 'Acima do peso (sobrepeso)';
} else if (imc >= 30 && imc < 35) {
  imcSituation = 'Obesidade grau I';
} else if (imc >= 35 && imc < 40) {
  imcSituation = 'Obesidade grau II';
} else if (imc >= 40) {
  imcSituation = 'Obesidade graus III e IV';
}

console.log(`\n${name}, seu IMC é: ${imc}`);
console.log(`\nDe acordo com seu IMC sua situação é: ${imcSituation}\n`);
