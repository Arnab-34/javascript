//Functions: it is a package of code which perform some particular operations.
//and by asigning the name of the Function() we can access it anywhere.
//Function have ascope and a definition.

// function syntax=> funtion funtion_name(){defination/scope}

function Firstfun(){
    console.log(`"H","r","r"`);
}
Firstfun()

//Add two numbers

function addtwonum(num1,num2/* parameters*/){
     //definition
     let result = num1 + num2
     return result; //or return num1+num2 
}
const result= addtwonum(12,23/*arguements*/)
console.log("enter two number:", result);

//
function username(usernme="guest"/* this means usernme shouldbe minimun values is "guest" */){
    if(usernme===undefined/* another way "!usernme" */){
        console.log("Please enter a username");
        return
    }else{
     return`${usernme} Just loggedin`}
}

console.log(username());//if we pass empty string in the aurgement the Outpur is given => "undefine"
//console.log(username("arnab"));// Output=> arnab Just loggedin

// rest operator => when we use spread operator in funtion we called it rest operator. 
//it is use to get multiple value and add into the array.

function calculateCartprice(...num5){
    return num5
}

console.log(calculateCartprice("200","334","232")
);

//Passing Object into Function.
const calculate={
    price:"jdsk",
    items:"3",
    total:"221"
}

function CalcuateOverall(anyobject) {
    console.log(`user is :${anyobject.price} and the price is:${anyobject.items}`);
    
}
CalcuateOverall(calculate)

// Array 2nd value print in the function to call the object


   const arr= [300,400,500]
function Arry(sec){
   return sec[2]
}

console.log(Arry(arr));