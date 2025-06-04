const myNums=[1,2,3,4,5]

// const newNums=myNums.filter((num)=> num>2)//returns value according to condition
const newNums=myNums.filter((num)=>{
    return num>2
})

// const newNums=[]

// myNums.forEach((num)=>{
//     if(num>2){
//         newNums.push(num)
//     }
// })//using for-each

// console.log(newNums);

const books=[
    {title:"book one",genre:"fiction",publish:1981,edition:2003},
    {title:"book two",genre:"non-fiction",publish:1991,edition:2021},
    {title:"book three",genre:"fiction",publish:1985,edition:2020}
]

const userBooks=books.filter((bk)=>{
    return bk.publish >1980 && bk.edition>2015
})

console.log(userBooks);




