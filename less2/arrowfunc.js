//Current contex:use "this"keyword
// Function under the Object in object.
const user={
    tin:"arnab",
    tun:32,
    tion:function (){
        console.log(`${/*this key word use for access the key of user and also can change the key value */this.tin } welcome to website`)
        console.log(this)
    }
        
}
user.tion()// Output=> arnab welcome to website
user.tin="ajf";//Here we changed the object key name.(context change)
user.tion()//Now the output is "ajf welcome to website"
//console.log(this)// OUTPUT=>"{}" refered empty string because it is a node envinoment/ if we execute in browser console it give the output=>"Window" it is a global object.

//////////
const neel= function(){
   //if we put in a varable( let username="aknd")//Output=> Undefined.
   username="ldsn"//Output=> ldsn
   console.log(this.username);
}

neel();// OUTPUT=> Global Object ,global value.
//////////////////

//arrow Function Declaration type 1: Syntax: ()=>{}  
const neel1= ()=> {
    
    usernameee="wan"
    console.log(this.usernameee);
}
neel1() 
//
//
//arrow function Declaration type 2: Syntax=> const num= (num1,num2) => (num1+num2)

const num= (num4,num5) => (num4+num5); console.log("Hi this is") //// implicit arrow scope

console.log(num(2,4))

// passing object in Arrow function
const neel3= ()=>({user:{user1:"jsa"}} )

console.log(neel3())