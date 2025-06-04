const coding = ['js', 'java', 'R']

// coding.forEach( function (item){
//     console.log(item);
// })

//one more variation

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})//for each loop in array of objects it is very useful when we deal with database
