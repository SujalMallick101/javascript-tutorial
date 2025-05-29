const marvel_heros=["thor","ironman","hulk"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)//wrong method to concatenate two arrays
// console.log(marvel_heros);

// console.log(marvel_heros[3][2]);//batman

const merge_heros=marvel_heros.concat(dc_heros)//correct way to conactenate two array
console.log(merge_heros);

const all_heros=[...marvel_heros,...dc_heros]//conacatenate using spread operator
console.log(all_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array=another_array.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it.
console.log(real_array);


console.log(Array.isArray("sujal"));//check if the value passed to isArray method is array or not
console.log(Array.from("sujal"));//Creates an array from an iterable object.
console.log(Array.from({name:"sujal"}));//interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//Returns a new array from a set of elements.





