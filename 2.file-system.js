const fs = require("node:fs"); //A partir del Node 16.0.0 se recomienda poner el 'node: '

const stats = fs.statSync("./archivo.txt");

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), //si es un directorio
  stats.isSymbolicLink(), //si es un enlace simbolico
  stats.size //tamaño del archivo en bytes
);
