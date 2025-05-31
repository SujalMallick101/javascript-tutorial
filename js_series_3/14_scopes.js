
let a=10//global scope



if (true) {//block scope-accessed only inside the block
    let a = 10
    const b = 20
    console.log(a);
    
}


console.log(a);
// console.log(b);

//Nested Scope


function one(){
    const username="sujal"

    function two(){
        const website="youtube"
        console.log(username);//username can be accessed
    }

    console.log(website);//website cant be accessed
    two()
    
}

// one()

if(true){
    const username="sujal"
    if(true){
        const website=" youtube"
        console.log(username+website); 
    }
    // console.log(website);//it gives an error
}

// console.log(username);//it gives an error

//++++++++++++++++++++++ interesting ++++++++++


console.log(addOne(22));//it executes without any error

function addOne(num){
    return num +1
}


console.log(addTwo(22));//it gives an error 

const addTwo=function(num){
    return num +2
}


