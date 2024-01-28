//for-of loop

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

//Mpas itterate
for (const [key,values ]of map) {
    console.log(key,'=',values);
    
}

//How to itterate Object{using For in loop}
const myObject={
    'game': 'Nfs',
    'game2':'bbt'
}

for (const key in myObject) {
   console.log(` ${key} value of my object is ${myObject[key]}  `);
}
//for (const [key]of myObject) {
 //   console.log(`${key}`);
//}


//array itteration using {For IN Loop}
const programing=["js","cpp","swift","java"]

for (const key in programing) {
     
     console.log(key); //it prints the array index 
     console.log(programing[key]); //it prints the array keys with index no.
    
}

//for-each loop using callback function.
//forEach loop donot return any values

const coding=["aa","bb","cc","dd"]

coding.forEach( function(val){
    console.log(val)
} )

//we can use also arrow function

const arr3=["rum","wiskey","bp"]

arr3.forEach( (item)=>{
    console.log(item)}
    )
//
const arr4=["hewllo","how","are"]
function printme(itemm) {
console.log(itemm);

    
}
arr4.forEach(printme)

//

const morp=['tung',"lna","sla","alk"]

morp.forEach( ( val,index,array)=>{ 
    console.log(val,index,array);
})

//passing object into array
//and access the array object 
const mycoding=[
    {
    filename:"hi",
    language:"duuuu",
    property:"gu"
    },
    {
    filename:"hiii",
    language:"du",
    property:"guuuu"
    },
    {
    filename:"hiiii",
    language:"duu",
    property:"guaa"
    }
    
]
mycoding.forEach((item)=>{
   console.log(item.filename)
})

//filter

const myNums=[1,2,3,4,5,6,7,8,9,10]
// const mynum= num.filter( (num)=> {
//     return num>4
//  }
// )

// we can do it using ForEach
const newNum=[]
myNums.forEach( (num)=>{
     if(num>4){
        newNum.push(num)

     }
})

console.log(newNum);

 
const book=[
{ titte: 'Book Two',genre: 'Non-Fiction',publish:1992,edition:2004},
{ titte: 'Book Three',genre: 'History',publish:1999,edition:2008},
{ titte: 'Book Four',genre: 'Non-Fiction',publish:1989,edition:2007},
{title: 'Book Four',genre : 'Non-Fxctxon',publish:1989,edition:2010},
{ title: 'Book Five',genre: 'Science',publish:2009,edition: 2014 } ,
{ titte: 'Book Six',genre: 'Fiction',publish:1987,edition:2010},
{ titte: 'Book Seven',genre: 'History',publish:1986,edition:1996 } 
];

//let userBooks= book.filter( (bookgenre)=> {return bookgenre.genre=== 'History'})
let userBooks= book.filter( (need)=> {
    return need.publish >=1985 && need.genre==="History" })
console.log(userBooks);

