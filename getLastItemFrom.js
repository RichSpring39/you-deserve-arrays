const prompt = require('prompt-sync')({sigint: true});

let Last = JSON.parse(prompt("Enter any array: "));
console.log(Last[Last.length-1]);