//They’re key-value pairs, essentially containers for data and functionality.

//object literals
const mySym = Symbol()
const jsUser = {
    name: "sujal",
    "full name": "sujal mallick",
    [mySym]: "key1",//symbol
    age: 21,
    location: "jamshedpur",
    email: "sujal@gmail.com",
    isLoggedIn: false
}

//Accessing 
console.log(jsUser.email);//using dot notation
console.log(jsUser["email"]);//using square notation
console.log(typeof jsUser[mySym]);//only accesses using square notation
console.log(jsUser["full name"]);//cant accessed using dot notation

jsUser.email = "sujal@google.com"//update email
// Object.freeze(jsUser)//make object immutable.
jsUser.email = "sujal@123.com"//cannot be modified
console.log(jsUser);


jsUser.greeting = function () {//an object can have function as key value pair
    console.log("hello js user");
}
console.log(jsUser.greeting);//function reference is returned



jsUser.greetingTwo = function () {
    console.log(`hello js user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser);









