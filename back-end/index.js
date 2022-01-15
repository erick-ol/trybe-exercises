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

calculate(10, 15, 20)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

calculate(1, 1, '1')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

calculate(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
