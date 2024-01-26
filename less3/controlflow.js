//Comparision Operation:  =>  ,==,<=,!=
//if
const isuserLoggedin =true

if(isuserLoggedin){
    console.log(`Execute`);

};

let temp=40
if(temp===40){
    console.log("temp is 40");
} else {
    console.log("temp is less than 40  ");
};

///

let score=0.1;

if(score>100){
    let power="fly";
    console.log(`User Power Fly:${power}`);
}else if(score<100 && score >0){
    console.log("the score is less than 100");
}else if(score===0){
   console.log(" No Money");
}
//

const Debitcard = false;
const Userid= true;

if(Debitcard==true && Userid==true){
    console.log(`u can buy from this Store`);

}else if(!Debitcard && Userid==true){
    console.log("You donot have a debitcard.");
}
else if(Debitcard==true&& Userid==false){
        console.log("You have a debitcard but you donot have a user id ,Plz create a user id");
}
else if(Debitcard==false&& Userid==false){
            console.log("You donot have a debitcard and you donot have a user id ,Plz create a user id and debit card");
}

// Pipe/OR statement SYNTAX: "||"

let loggedin=false;
let loggedviaemail= true;

if(loggedin|| loggedviaemail){
    console.log("You are logged in");
}else{
    console.log("incorrect Logged in");
}
            


//Nullish Coalescing Operator (??):null undefined (Use for Error handeling)
let val1;
//val1=5??10
//val1=null??10
val1=undefined??15

console.log(val1);

//Ternary Oparator
//condition? true:false
const iceteaprice=100
iceteaprice<=80 ? console.log("Less than 80"):console.log("more than 80");
