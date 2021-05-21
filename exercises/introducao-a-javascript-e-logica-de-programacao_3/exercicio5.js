let n = 25;
let espaco = "";
let espacoInterior = " ";

//Faz um array com o tamanho de espacos necessario
for (let i = 0; i < ((n/2) - 1); i++) {
  espaco += " ";
}

for (let i = 0; i < n; i++) {
  if (i % 2 == 0) {
    process.stdout.write(espaco);
    for (let j = 0; j <= i; j++) {
      if ((i == 0) || (i == (n -1))) {
        process.stdout.write('*');
      } else {
        if ((j==0) || (j==i)) {
          process.stdout.write('*');
        } else {
          process.stdout.write(espacoInterior);
        }
      }
    }
    process.stdout.write('\n');
    espaco = espaco.slice(0, -1);
  }
}
