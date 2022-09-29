const prompt = require('prompt-sync')({sigint: true});

sec1 = JSON.parse(prompt("Please create an array:  "));

if(sec1[2] !== undefined && typeof sec1[2] === 'string'){
    
    let sec2 = sec1[2];
    if(sec1.length >= 2){
        console.log("The 2nd character of the 3rd item is: '" 
        + sec2.substring(1,2) + "." );
    }
    else{   
        console.log("error")
    }
}   
else{
    console.log("error")
}

