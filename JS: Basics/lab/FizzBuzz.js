const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);


for(let i=0; i < 100; i++) {
    if(i % num1 === 0 && i % num2 ===0){
        console.log("fizzbuzz");
    }

    else if(i % num1 === 0){
        console.log("fizz");
    }
    else if(i % num2 ===0){
        console.log("buzz");
    }
    else {console.log(i)}
}

