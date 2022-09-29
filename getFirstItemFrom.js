const prompt = require('prompt-sync')({sigint: true});

let c1 = JSON.parse(prompt("Enter array: "));

console.log(c1[0]);