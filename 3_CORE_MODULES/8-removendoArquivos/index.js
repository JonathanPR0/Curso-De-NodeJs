const fs = require('fs');
fs.unlink('message.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Arquivo removido com sucesso!');
  }
});
