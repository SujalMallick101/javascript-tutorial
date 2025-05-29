// variables are used to store data values.


//✅ Block-scoped
//✅ Cannot be updated or re-declared (value must be assigned on declaration)
//✅ Good for constants or never-changing variables
const accountId=12345;
//const accountId=234-Not allowed
//accountId=678-Not allowed
console.log(accountId);


//✅ Block-scoped (inside {})
//✅ Can be updated, but not re-declared in the same scope
let accountEmail="sujal@gmail.com"
//let accountEmail="mohit@gmail.com"-Not allowed
console.log(accountEmail);

//✅ Function-scoped
//✅ Can be re-declared and updated
//✅ Hoisted (moved to the top of the scope)
//🚫 Generally not recommended because of potential scoping confusion
var accountPassword="12234"
var accountPassword="444"
console.log(accountPassword); //Allowed


//Special Notes
/*
In modern Javascript we use let and const keyword for variables declaration.
*/