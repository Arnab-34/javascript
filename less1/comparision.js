//same data type comparision
console.log(1<2); //'<' comarision operator
console.log(2<1);
console.log(3>1);
console.log(11>22);
console.log(11==1); // '==' equality operator
console.log(2 !=1);// '!=' not equal to operator
//
//string and number comparision different data type
console.log("2"<1);// here "2" is string but it is automaticaly conversion into number
console.log("02">1);// here "02"is astring but it is automaticaly conversion into number

//null datatype comparision
console.log(null<0);//comparison convert null into a number treated as 0.
console.log(null>0);//comparison convert null into a number treated as 0.
console.log(null==0);//equality check cannot convert the null data type.
console.log(null>=0);//comparison convert null into a number treated as 0.

// undefined datatype comparision

console.log(undefined<0);
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);

// "===" strict datatype checking

console.log("2" === 2);;