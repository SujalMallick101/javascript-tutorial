
//This keyword//
const user = {
    username: "sujal",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username},welcome to the website`);//'this' refer to the current context which is 'user' here
        console.log(this);

    }
}

// user.welcomeMessage()
// user.username="mohit"
// user.welcomeMessage()

console.log(this);//in global context 'this' return an empty object


// const one=function() {
//     let username = "sujal"
//     console.log(this.username);//this does not work with function
// }

// one()

//Arrow function//

// const addTwo=(num1,num2)=>{
//     return num1+num2// explicit return if return keyword is used
// }

const addTwo = (num1, num2) => (num1 + num2)//implicit return

console.log(addTwo(2, 3));





