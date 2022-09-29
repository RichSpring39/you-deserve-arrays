const prompt = require('prompt-sync')({sigint: true});

let a1 = JSON.parse(prompt("Enter an array: "));

if(a1.length >=10){
    console.log(`true`);
}else {
    console.log(`false`);
}
