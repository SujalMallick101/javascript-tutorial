//****************Numbers***************

const score=400//automatically detect
console.log(score);


const balance=new Number(400)//specifically cast
console.log(balance);

console.log(balance.toString());//convert to string
console.log(balance.toFixed(2));//fixed upto 2 decimal

const otherNumber=234.65778
console.log(otherNumber.toPrecision(5));//give precise value

const hundreds=10000
console.log(hundreds.toLocaleString('en-IN'));//represented with comma

//********************Maths**************

console.log(Math.abs(-4));//return the positive value
console.log(Math.round(4.5));//round-off to nearest integer
console.log(Math.ceil(4.2));//select the highest value-5
console.log(Math.floor(4.7));//select the lowest value-4
console.log(Math.min(3,4,5,2,0));//return the minimum value
console.log(Math.max(3,4,5,2,0));//return the maximum value

console.log(Math.random());//return the random number from 0 to 1
console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);//general formula to get random number












