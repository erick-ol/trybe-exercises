const fatorial = n => (n == 0) ? 1 : n * fatorial(n - 1);
const n = 3;
console.log(`O fatorial do número ${n} é ${fatorial(n)}`);