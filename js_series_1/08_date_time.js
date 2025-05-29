//Dates

let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


let myCreatedDate=new Date(2023,8,6)//0-jan,1-feb and so on
let newdate=new Date("2025-02-24")//yy-mm-dd
// console.log(newdate.toLocaleString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);//get value in miliseconds
console.log(myCreatedDate.getTime());//convert date into milisecond
console.log(Math.round(myTimeStamp/1000));//convert milisecndes to seconds

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());//Month starts from 0


console.log(newDate.toLocaleString('default',{
    weekday:'long'
}));//define custimize property
















