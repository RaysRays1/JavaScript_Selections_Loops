console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++){
    if(i % 2 == 0){
        continue
    }else {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 0; i < 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("fizzBuzz");
    } else {

    if(i % 3 == 0){
        console.log("fizz");
    }
        
    if(i % 5 == 0){
        console.log("buzz");
    }
    }
}

//Exercise 3 Section
console.log("EXERCISE 3:\n===========\n");
 i = 0;

while(i < 100){
    if(i % 2 != 0){
        console.log(i);
    }
    i++;
}
console.log("Do while loop EXercise 1:")
 b = 0;
do{
    if(b % 2 != 0){
        console.log(b);
    }
    b++;
} while(b < 100);

console.log("While loop EXercise 2:")
 i = 0;
while(i < 100){
    let output = " ";

    if(i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} fizzBuzz`);
    } else {

    if(i % 3 == 0){
        console.log(`${i} fizz`);
    }
        
    if(i % 5 == 0){
        console.log(`${i} buzz`);
    }

    }
    i++;
}
console.log("Do while EXercise 2:")
i = 0;
do{
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} fizzBuzz`);
    }
    i++;

    if(i % 3 == 0){
        console.log(`${i} fizz`);
    }
        
    if(i % 5 == 0){
        console.log(`${i} buzz`);
    }

} while(i < 100){
    let output = " ";

}  

