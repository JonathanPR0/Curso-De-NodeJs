const fs = require('fs');
fs.rename("message.js", "message.txt", (err)=>{
  if (err) {
    console.log(err);
  }else{
    console.log("Item renomeado com sucesso!");
  }
});