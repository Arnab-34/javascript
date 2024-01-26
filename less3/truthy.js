const UserEmail ="Anam@gamil.com";
if(UserEmail){
    console.log("Got User Email");
} else{
    console.log("Donot have User Email");
}

// Falsy Values=> !,0, -0,"",BinInt 0n,null,undefined,NaN
//Truthy Values=> "0",'flase'," ",{},function(){}


//Check the array is empty or not.
let Email=[2,4]
if(Email.length===0){
console.log("Aarry is Empty");
}else{
    console.log("Not an Empty Array");
}

// check the Object is empty or not.
const emptyObject={
    arnab:23 ,
    hemant:34
}
if(Object.keys(emptyObject).length===0){
console.log("the object is empty");
}else{
    console.log("the object is not empty");
    console.log(emptyObject);
}
//
