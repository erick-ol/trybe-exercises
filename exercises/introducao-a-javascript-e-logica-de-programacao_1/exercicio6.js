let pecaXadrez = "Rei";
pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez) {
  case "rei":
    console.log(pecaXadrez + " -> Qualquer direção uma casa");
    break;
  case "rainha":
    console.log(pecaXadrez + " ->  Qualquer direção sem pular peça");
    break;
  case "bispo":
    console.log(pecaXadrez + " -> Diagonal sem pular peça");
    break;
  case "cavalo":
    console.log(pecaXadrez + " -> Anda em L e pode pular peça");
    break;
  case "torre":
    console.log(pecaXadrez + " -> Vertical ou horizontal");
    break;
  case "peão":
    console.log(pecaXadrez + " -> Anda pra frente, captura na diagonal, apenas uma casa");
    break;
  default:
    console.log("Opção inválida");
}