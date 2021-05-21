let n = 9;
let espaco = "";

//Faz um array com o tamanho de espacos necessario
for (let i = 0; i < ((n/2) - 1); i++) {
  espaco += " ";
}

for (let i = 0; i < n; i++) {
  if (i % 2 == 0) {
    process.stdout.write(espaco);
    for (let j = 0; j <= i; j++) {
      process.stdout.write('*');
    }
    process.stdout.write('\n');
    espaco = espaco.slice(0, -1);
  }
}
