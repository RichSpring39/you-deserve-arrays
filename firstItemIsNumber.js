const prompt = require('prompt-sync')({sigint: true});

let fn1 = JSON.parse(prompt("Enter array: "));
let fn2 = (typeof 1);
console.log((typeof fn1[0])===fn2);
