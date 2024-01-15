//++++++++++++++NUMBERS++++++++++++++++++++
const score=45;

scoree= toString(score);
console.log(typeof(score))
console.log(`is the number is equal: score,${"45"===45} `) ;

const point=400;
console.log(point);

const Report=new Number(123.8966);
console.log(`${typeof Report}, ${Report} `);
console.log(Report);
console.log(Report.toString().length);
console.log(Report.toFixed(3));// ".toFixed()" is use for print the fixed lenght value after the decimal length.
console.log(Report.toPrecision(3));

//////////////////

const daam= new Number(23924030);
console.log(daam.toLocaleString('en-IN'));//"toLocalstring()" use for the readabilaty of number easy.

// +++++++++++++++++++MATHAMETICS++++++++++++++++++++++++++
// Math is an ONJECT.//Math is an libary and it is very usefull//
console.log(Math)// OUTPUT=> Object [Math] {}
console.log(Math.round(23.89), Math.round(23.89));
console.log(Math.abs(-223.3));
console.log(Math.ceil(223.445));
console.log(Math.floor(223.332));
console.log(Math.max(2, 1, 9,23));
console.log(Math.min(21,0,2,9));

// Math.random => is always give the value of form 0-1 
console.log(Math.random());
console.log((Math.random()*10)+1);//(Math.random()*10)+1 by using this formulla we can generate the output from the range of 1-9.
console.log(Math.floor(Math.random()*10)+1)

//MAX MIN Define in Math.random ()
const min=1
const max=6
console.log(Math.floor(Math.random()*(max-min+1)+min));