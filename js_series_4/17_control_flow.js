//if statement

const isUserLoggedIn=true
const temperature=4

if(temperature<50){
    console.log("less than 50");
}else{
    console.log("temperature is greater than 50");
}

const score=200

if(score>100){
    const power="fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);//Power is not accessed

//short hand notation
const balance=1000
// if(balance>500)console.log("test");

if(balance<500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less than 1200");  
}



const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");//execute when both condition is true
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in ");//execute when any of the condition is true
}








