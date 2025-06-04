const myObj={
    js:"javascript",
    cpp:"c++"
}

for (const key in myObj) {
    console.log(`${key} is extension for ${myObj[key]}`);
}

//arrays
const arr=['java','js','c']
for (const i in arr) {
   console.log(arr[i]);
}

//Maps
// const map=new Map()
// map.set('IN','India')
// map.set('FR','France')

// for (const key in map) {
//     console.log(key);
// }//For in loop not working with maps



