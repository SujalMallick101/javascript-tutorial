//An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined and immediately executed. 
//It’s a neat trick to create a private scope for your code, avoiding variable pollution in the global scope.

(function chai(){
    console.log(`DB connected`);
})();//to stop the context of this function use semicolon


//using arrow function

((name)=>{
    console.log(`DB connected ${name}`);
})("sujal");


