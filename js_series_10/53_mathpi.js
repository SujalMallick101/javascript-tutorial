const descipter=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descipter);

// console.log(Math.PI);

const chai={
    name:"ginger chai",
    price:"250",
    isAvailable:true,

    orderChai(){
        console.log("chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable:false
})


// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [ key,value ] of Object.entries(chai)) {
    if(typeof value!='function'){
        console.log(`${key}:${value}`);
    }
}






