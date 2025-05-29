const tinderUser=new Object()//declared using constructor-singleton object

tinderUser.id="123abc"
tinderUser.email="tinder@.com"
tinderUser.isLoggedIn=false

console.log(tinderUser);

//nesting of object

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sujal",
            lastname:"mallick"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);//nested objects can also accessed through dot notation

//merge two or more objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}//it is a bad practice because does not gives accurate result

// const obj3=Object.assign({},obj1,obj2)//correct syntax for merging

const obj3={...obj1,...obj2}//spread operator- most used
console.log(obj3);

console.log(Object.keys(tinderUser));//return all keys in array
console.log(Object.values(tinderUser));//return all values in array
console.log(Object.entries(tinderUser));//array of [key, value] pairs.

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//check if property exist or not



//destructuring

const course={
    courseName:"js in hindi",
    price:999,
    courseInstructor:"sujal"
}

const {courseInstructor}=course
console.log(courseInstructor);

// const {courseInstructor:instructor}=course
// console.log(instructor);






