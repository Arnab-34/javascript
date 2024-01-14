//Call By value (stack use the copyof the variable ) use the primitive data type

let aj="aajf"
let another=aj
another="xfdgdf "

console.log(aj)
console.log(another)
 
// Call by Reference (the vabiable store in the stack but point towards the heap to call )( Heap memory/NON- Primitive data type)

let egg= {
    colour:"white",
    shape:"oval"
    
};
let eggwe = egg;
eggwe.colour="arnsghegg"
console.log(egg);
console.log(eggwe);
