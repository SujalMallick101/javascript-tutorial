//object literal
const user={
    username:"sujal",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
    }
}

// console.log(user.getUserDetails());

//constructor function

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`welcome: ${this.username}`);
    }

    return this
}

const userOne=new User("sujal",10,true)
const userTwo=new User("mohit",87,false)
console.log(userOne.constructor);
// console.log(userTwo);


