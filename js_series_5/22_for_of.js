//for of

const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    console.log(val);
}

const str="greetings"
for (const greet of str ) {
    console.log(`each character: ${greet}`);
}

//Maps
const map=new Map()
map.set('IN','India')
map.set('FR','France')
console.log(map);

for (const [key,value] of map) {//destructuring 
    console.log(key,"-:",value);
}

//objects
// const myObj={
//     game1:'NFS',
//     game2:'MARIO'
// }

// for (const [key,value] of myObj) {
//     console.log(key,"-",value);
// }//For Of loop not work for objects
