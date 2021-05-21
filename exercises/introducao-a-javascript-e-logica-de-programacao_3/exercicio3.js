let n = 5;
let espaco = "";

//Faz um array com o tamanho de espacos necessario
for (let i = 0; i < n; i++) {
  espaco += " ";
}

for (let i = 0; i < n; i++) {
  espaco = espaco.slice(0, -1);
  process.stdout.write(espaco);
  for (let j = 0; j <= i; j++) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}