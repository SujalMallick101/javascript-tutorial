const userEmail="sujal@gmail.com"

if(userEmail){//assumed the value is true-truthy
    console.log("got user email");
}else{
    console.log("dont have user email");
}

//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}

//Nullish Coalescing Operator(??): null , undefined

let val1;
// val1=5??10
// val1=null ?? 10
// val1=undefined ?? 15
val1=null ?? 10 ?? 15

console.log(val1);

//Ternary operator

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");


