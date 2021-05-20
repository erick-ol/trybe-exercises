let salarioBruto = 5000;
let inss;
let salarioBase;
let aliquotaIR;
let parcelaIR;
let valorIR;
let salarioLiquido;

// Calculando INSS
if (salarioBruto <= 1566.94) {
  inss = (8 * salarioBruto) / 100;
} else if ((salarioBruto >= 1566.95) && (salarioBruto <= 2594.92)) {
  inss = (9 * salarioBruto) / 100;
} else if ((salarioBruto >= 2594.93) && (salarioBruto <= 5189.82)) {
  inss = (11 * salarioBruto) / 100;
} else if (salarioBruto > 5189.82) {
  inss = 570.88;
}

salarioBase = salarioBruto - inss;

// Calculando IR
if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
  parcelaIR = 0;
} else if ((salarioBase >= 1903.99) && (salarioBase <= 2826.65)) {
  aliquotaIR = 7.5;
  parcelaIR = 142.8;
} else if ((salarioBase >= 2826.66) && (salarioBase <= 3751.05)) {
  aliquotaIR = 15;
  parcelaIR = 354.8;
} else if ((salarioBase >= 3751.06) && (salarioBase <= 4664.68)) {
  aliquotaIR = 22.5;
  parcelaIR = 636.13;
} else if (salarioBase > 4664.68) {
  aliquotaIR = 27.5;
  parcelaIR = 869.36;
} 

valorIR = ((aliquotaIR * salarioBase) / 100) - parcelaIR;

salarioLiquido = salarioBase - valorIR;
console.log(`O salário líquido é: R$${salarioLiquido}`);