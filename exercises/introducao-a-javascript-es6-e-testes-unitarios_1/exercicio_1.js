const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    console.log(`Não devo ser utilizada fora meu escopo (else)`);
  }
}

testingScope(true);