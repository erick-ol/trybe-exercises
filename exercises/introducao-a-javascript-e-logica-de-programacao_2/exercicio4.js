let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let soma = 0;
let mediaAritmetica;

for(let number of numbers) {
  soma += number;
}

mediaAritmetica = soma / numbers.length;

if (mediaAritmetica > 20) {
  console.log("O valor é maior que 20");
} else if (mediaAritmetica < 20) {
  console.log("O valo é menor que 20");
}