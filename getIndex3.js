const prompt = require('prompt-sync')({sigint: true});

let get3 = JSON.parse(prompt("Enter any array: "));

let b = get3.length;

if (b < 4){
    console.log(get3[get3.length-1]);
} else {
    console.log(get3[3]);
}

