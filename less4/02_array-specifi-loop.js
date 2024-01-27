//

const arr=[1,2,3,4,5,6,7,8,9]
for (const num of arr) {
    console.log(num);
    
}
//
//

const greetings="Hello World"
for (const greet of greetings) {
    if(greet== " "){
        console.log("Blacnk Space Detected");
      continue
    }
    console.log(`Each character is ${greet}`);
    
}

//Maps it is an Object=> It prints only Unique Value and donot print Duplicate values.

const map = new Map()
map.set("IN"/*key*/,"India"/*Values*/)
map.set("US"/*key*/,"United States")
map.set("UK"/*key*/,"United Kingdom")
//console.log(map);

for (const [key,values ]of map) {
    console.log(key,'=',values);
    
}

const tinder= new Object()

tinder.id="arnab"

console.log(tinder);