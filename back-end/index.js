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

const random = () => {
  return Math.floor(Math.random() * 100 + 1);
}

const callCalculate = async () => {
  const numbers = Array.from({ length: 3 }).map(random);
  try {
    const total = await calculate(...numbers);
    console.log(total);
  } catch (err) {
    console.error(err);
  }
}

const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });

async function getSimpsonById(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }

  return chosenSimpson.name;
}

async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  
  const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
  
  simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });
  await fs.writeFile('./simpsonsFamily.json', simpsonsFamily);
}

function replaceNelson() {
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}
