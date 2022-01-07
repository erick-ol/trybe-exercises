const readline = require('readline-sync');

let game = 1

do {
  const number = readline.questionInt('\nQual número você acha que é de 0 a 10? ');

  const random = Math.round(Math.random() * 10);

  if ( number === random) {
    console.log('\nParabéns você acertou o número!!!');
  } else {
    console.log(`\nInfelizmente você errou, o número era o ${random}`);
  }

  game = readline.questionInt('\nSe quiser jogar novamente digite 1, se não digite 2. ')
} while (game === 1);

console.log('\nObrigado por jogar!!\n');
