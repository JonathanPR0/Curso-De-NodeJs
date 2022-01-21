const fs = require('fs'); // file system

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  err ? console.error(err) : console.log(data);
});
