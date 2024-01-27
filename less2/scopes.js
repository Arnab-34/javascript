// use "var" we not use 

//global scope :in global Scope What ever variable value we declared it can access any where in the code. 
//const a=12

/*Block Scope*/
if (true){//Scope: in Block scope what ever value we variable values are declared it only access in that scope.
    let a=10;
    const b=20;
    let c=30;

    console.log("Inner is", a)
}
console.log("the global scope Value is");


// what is clouser 
// It means the child functions can access the parent function and variables.
// Passing function under function.

function Func(){
 
    function Func2(da,da2){
            const daa= da+da2
            console.log("the result is",daa)
             
             return daa;

    }

    Func2(2,3)
   
}
Func();


// nested 
if (true){
    const ak="arnab"
    if(ak==="arnab"){
      const  b="adja"
      console.log(ak.concat(b))
        

    }

    console.log();
}
/// +++++++++++++Intresting+++++++++++++++
//Write an function to take input and add some number the number
//two type of syntax in the Function declaration 
//IN this syntax we can access it before the function declaration beacause (we can not store the function in a variable )
console.log(addtwonum(1))
function addtwonum(num1/* parameters*/){
    //definition
    return num1+3
}




////IN this syntax we cannot access it before the function declaration beacause (we store the function in a variable )
//addtwonum(1)
//const numm1=function addtwonum(num1/* parameters*/){
    //definition
   // return num1+1
//}
