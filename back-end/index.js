// Exercise 1
const calculate = (n1, n2, n3) => {
  return new Promise((resolve, reject) => {
    if ((typeof n1 !== 'number') || (typeof n2 !== 'number') || (typeof n3 !== 'number')) {
      reject('Informe apenas números');
    }
    const total = (n1 + n2) * n3;
    if (total < 50) return reject('Valor muito baixo');
    resolve(total);
  });
}

// Exercício 2
const random = () => {
  return Math.floor(Math.random() * 100 + 1);
}

const callCalculate = () => {
  const numbers = Array.from({ length: 3 }).map(random);
  calculate(...numbers)
    .then(result => console.log(result))
    .catch(err => console.error(err.message))
}

callCalculate();
