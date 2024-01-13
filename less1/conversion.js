let score = "33";
console.log(typeof score);
console.log(typeof(score));

let valueInNumber /* its a variable */ = Number(score); // Number(use for typecasting) is an class and the naming convension is Fisrt letter in capital//
 console.log(valueInNumber);
 console.log(typeof valueInNumber) 
;

let scores = "33hdw" //let-is a datatype ,scores- is a variabe which stores the data "33hdw"

console.log(typeof(scores));
let valueInNumber2 = Number(scores);
console.log(valueInNumber2) // output- Nan(its a special type of datatype)
console.log(typeof valueInNumber2); //output- number but "33hdw" is not a number(so it is a exception in nodejs/js)
 
// empty string conversion into boolean

let scoress = "";
console.log(typeof scoress);
console.log(typeof(scoress));

let valueInNumber3 /* its a variable */ = Boolean(scoress); // Number(use for typecasting) is an class and the naming convension is Fisrt letter in capital//
 console.log(valueInNumber3);
 console.log(typeof valueInNumber3)
;

//string conversion into boolean
let scoressss = "33";
console.log(typeof scoressss);
console.log(typeof(scoressss));

let valueInNumber4 /* its a variable */ = Boolean(scoressss); // Number(use for typecasting) is an class and the naming convension is Fisrt letter in capital//
 console.log(valueInNumber4);
 console.log(typeof valueInNumber4)
;

//*****************************operations***********

let vulue = 3
let negetive = -vulue;
console.log(negetive)// output => -3

console.log(3+45);
console.log(3*3);
console.log(3**3);
console.log(3%3);
console.log(3/3);// output=> 1  

//ADDITION (string)
let string1 ="arnab";
let string2 = " karmakar";
let string3 = string1 + string2;

console.log(string3);// output=> arnab karmakar.



console.log("1" + 2);//output=> 12
console.log("1" +2 +2);//outpur=> 122
console.log(1 +"2");// output=> 12 
console.log(2+2+"1");//output=> 41
//

console.log(true);//output=> true
console.log(+true);//output=> 1
console.log(-true);//output=> -1
console.log(false);//output=> false
console.log(+false);//output=> 0
console.log(-false);//output=> -0
console.log(+"");// output=> 0
//
//
let num1, num2,num3 
num1=num2=num3=3+3
console.table([num1,num2,num3]);

// gamecouter operations prefix and postfix operations
 
let gamecounter=23
const y=gamecounter++;//postfit increment OUTPUT=24
console.log(`y:${y},gamecounter:${gamecounter}`);

let gamecounter2= 23
const x= ++gamecounter2// prefix increment OUTPUT=
console.log(`x:${x},gamecounter2:${gamecounter2}`);


