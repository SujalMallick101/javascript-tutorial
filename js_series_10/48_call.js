function setUserName(username){
    this.username=username
    console.log("called");
}

function createUser(username,email,password){
    setUserName.call(this,username)//hold the reference

    this.email=email
    this.password=password
}

const chai=new createUser("hitesh","chai@.com",123)
console.log(chai);
