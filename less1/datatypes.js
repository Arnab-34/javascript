"use strict"; //treate all js code as newer version
// "alert"; it is a data type ,but it not work in nodejs , it is work in browser
console.log(); //code readability should be high
"number"
"bigint"
"string"
"boolean"
"null"// scecial data types
"undefine"//special data types
"symbol"//special data types
"object"//special data types

console.log(typeof undefined);// "typeof" it is use for checking and printing the inpur type or variable type
console.log(typeof null);
/////////////////////////
//Symbol data type //it is a special data type use for create uniqueness
const d=Symbol("2553");
const andata=Symbol("2553");

console.log(d===andata);

///
//Bigint usage(after the number"73928899237387923n" we use "n")
const bigNumber= 73928899237387923n;
console.log(bigNumber);


////////////////////////////////////////////////

//DATA types are two types- PRIMITIVE DATA TYPE AND NON PRIMITIVE OR REFERENCE DATAtype

// primitive are 7 types(call by value) -- "string","Boolean",'Bigint',,"Number","null","undefined".,"symbol".
//
// Reference type (call by reference) 3types-
   //Array, Objects, Functions//
//EXAMPLE:
const shib=["neel","shiban","aryan"];
let Obj =
{
name12: "arnab",
age: 71 };
console.log(Obj)
   

//Function returns datatype OBJECT as output
const  hggh= function () {
    console.log("hellow World");
}

   

////QUESTION
//javascript is a static or dimanic type pogramming language.
//ANS- DYNAMIC Type//

