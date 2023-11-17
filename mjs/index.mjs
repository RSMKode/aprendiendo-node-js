// .js --> Por defecto utiliza CommonJS
// .mjs --> Para utilizar ES Modules
// .cjs --> Para forzar la utilización CommonJS

import { sum, sub, mult } from "./ops.mjs";

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mult(1, 2));
