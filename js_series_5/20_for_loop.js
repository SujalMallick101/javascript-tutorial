//for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}


//Nested for loop
for (let i = 1; i <= 10; i++) {
    console.log(`outer loop:${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loo:${j} and outer loop ${i}`);
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//for loop in array
let myArray = ["flash", "thor", "batman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i]
    console.log(element);
}

//break and continue keyword
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`)
        break//terminate the loop
    }
    console.log(`value of i is ${i}`);
}

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue//skip the current iteration and proceed with so on
    }
    console.log(`value of i is ${i}`);
}





