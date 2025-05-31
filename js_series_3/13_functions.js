//Functions are one of the core building blocks in JavaScript. 
// They’re reusable blocks of code that can take in data (parameters), perform actions, and return results.

function sayMyName(){//definition
    console.log("sujal");
}

sayMyName()//function call


// function addTwoNumbers(number1,number2){//number1 and number2 are parameters
//     console.log( number1+number2); 
// }


//using return statement
function addTwoNumbers(number1,number2){//number1 and number2 are parameters
    return number1+number2
}

const result=addTwoNumbers(2,3)//2 and 3 are arguments
console.log(result);

function loginUserMessage(username="sujal"){//default value
    return `${username} just logged in`
}

// const message=loginUserMessage("sujal")
const message=loginUserMessage()//if we dont pass any argument it will use default value if passed otherwise it return undefined
console.log(message);


function calculatePrice(...num1){//passing values using rest operator
    return num1//it returns value in an array
}

console.log(calculatePrice(200,300,400));


//passing object as argument
const user={
    username:"sujal",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"sahil",
    price:99
})


//passing array as argument
const myArray=[12,23,43,56]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));






