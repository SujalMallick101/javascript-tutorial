//Strings in JavaScript are sequences of characters used to represent text.

const name="sujal"//declaraction
const gameName=new String('sujal-mallick-software-engineer')//declared using new keyword
const repoCount=5 

// console.log(name + repoCount);-Outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//String interpolation

//**** Methods *****

console.log(gameName.length);//to get the length of a string
console.log(gameName.toUpperCase());//to covert all characters to uppercase
console.log(gameName.charAt(2));//to find the character with index number
console.log(gameName.indexOf('j'));//to get the index number of a character

console.log(gameName.substring(0,3));//to extract the part of a string

const newString="    hitesh   "
console.log(newString);
console.log(newString.trim());//remove the heading and trailing space

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));//replace with new value

console.log(url.includes('hitesh'));//includes method return true or false

console.log(gameName.split('-'));//convert it into an array based on seperator













