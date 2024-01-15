//Array

const myArr = [1,7, 9,5]

console.log(myArr.unshift(0));
console.log(myArr);
myArr.shift();
myArr.pop()
myArr.indexOf(7)
console.log(myArr.includes(9));
console.log(myArr,myArr.length, myArr.indexOf(7));

// Slice(original array canot change)  and Splic(original array has been change and the range has been removed)

const slice=[1,6,8,6,9,2,0,7]

console.log("A",slice.slice(1,3));//OUTPUT=> A [ 6, 8 ]
console.log("a",slice);//OUTPUT=> a [ 1, 6, 8, 6, 9, 2, 0, 7 ]

console.log("B",slice.splice(1,3));// OUTPUT=>B [ 6, 8, 6 ]
console.log("b", slice);//OUTPUT=> b [ 1, 9, 2, 0, 7 ]ARRAY CHANGE THAT IS THE MAIN DIFFERENCE.

// Spread operator(...variable_name,...variable_name) , concat [these two are use for the merging twoarray element ]

let arrr1=["ljs","kajn","anna"]
let arrr2=["a.mdk","asncla","anl","aksmc"]
//with concat method
const newarry= arrr1.concat(arrr2)
console.log("newarry:",newarry);
//with spread operator{it treats the all array element individualy.}
let newarr3=[...arrr1,...arrr2]
console.log(newarr3);

//join??

//convert into an array ise "Array.form" Method.
let realarray= 'arnab';
console.log(Array.isArray(realarray));
arr3=Array.from('realarray')
console.log(arr3);
