const readline = require('readline-sync');

console.log(`
1- IMC
2- Velocidade
3- Sorteio
`);
const script = readline.questionInt('\nDigite o número do script que deseja rodar: ');

switch (script) {
  case 1:
    require('./imc.js');
    break;
  case 2:
    require('./velocidade.js');
    break;
  case 3:
    require('./sorteio.js');
    break;
  default:
    console.log('\nDado incorreto.');
}
