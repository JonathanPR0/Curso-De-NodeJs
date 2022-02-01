//Dados:
const x = 112;
const y = 'José Maria';
const z = [1, 1, 2, 3, 5, 8, 13, 21];

//Apresentação de múltiplos dados:
console.log(x, y, z);

//Contagem de impressões:
const fib = [0, 1];

for (let i = 0; i < 6; i++) {
  const sum = +fib[i] + +fib[i + 1];
  console.count(`${sum} - Contagem`);
  fib.push(sum);
}

//Variáveis entre strings
console.log('O %s é gente fina', y);

//Apagar msgs do console
setTimeout(() => {
  console.clear();
}, 3000);
