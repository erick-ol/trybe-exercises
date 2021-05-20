let a = 1;
let b = 2;
let operacao = "Módulo";

switch (operacao) {
  case "Adição":
    console.log(a+b);
    break;
  case "Subtração":
    console.log(a-b);
    break;
  case "Multiplicação":
    console.log(a*b);
    break;
  case "Divisão":
    console.log(a/b);
    break;
  case "Módulo":
    console.log(a%b);
    break;
  default:
    console.log("Opção inválida");
}