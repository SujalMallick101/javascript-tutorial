// const arr=[1,2,3,4]


// const initialValue=0;
// const newNums=arr.reduce((acc,curr)=>{
//     return acc+curr
// },initialValue)//acc takes initial value at first time and then add curr value every time to it.

// console.log(newNums);

const shoppingCart=[
    {itemName:"js",price:999,duration:2},
    {itemName:"java",price:979,duration:9},
    {itemName:"react",price:9999,duration:6},
]

const totalPrice=shoppingCart.reduce((acc,item)=>{
    return acc+item.price
},0)

console.log(totalPrice);




