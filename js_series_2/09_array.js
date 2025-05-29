// //In JavaScript, an array is a special type of object used to store ordered collections of values. 
// // These values (called elements) can be of any type, including numbers, strings, objects, other arrays, and more.

const myArr=[0,1,2,3,4,5]//declaration
// const myArr2=new Array(1,2,3,4)//declared using new keyword
// console.log(myArr[0]);//accessing using indexing


// //Array Method

// myArr.push(6);//add an element to the end of an array
// console.log(myArr);

// myArr.pop()//remove the last element
// console.log(myArr);

// myArr.unshift(8)//Add element to the start of array
// console.log(myArr);

// myArr.shift()//remove the first element
// console.log(myArr);

// console.log(myArr.includes(6));//return true of false
// console.log(myArr.indexOf(2));//return the index of a value

// const newArr=myArr.join()//add all elements with a seperator in a string form
// console.log(newArr);

console.log("A ",myArr);

const my1=myArr.slice(1,3)//extract the part of an array based on indexing exclude end index
console.log(my1);
console.log("B ",myArr);

const my2=myArr.splice(1,3)//extract the part of an array based on indexing include end index and also manipulte the original array
console.log(my2);
console.log("C ",myArr);













