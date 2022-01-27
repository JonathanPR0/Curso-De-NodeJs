const os = require('os');

console.log('CPUS:\n');
console.log(os.cpus());
console.log('Memória RAM livre:\n');
console.log(os.freemem());
console.log('Diretório Home:');
console.log(os.homedir());
console.log('Tipo:\n');
console.log(os.type());
