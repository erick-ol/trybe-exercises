const readline = require('readline-sync');

const distance = readline.questionInt('Qual a distancia em metros? ');
const time = readline.questionInt('Qual o tempo em segundos? ');
let speed = distance / time;

console.log(`A velocidade é de ${speed}m/s`);
