const name = "arnab"
const repoCount =50

//console.log(name+repoCount+"VALUE")
console.log(`Hello World ${name} and my repocountt is ${repoCount}`);

const gameNumber = new String("   Sh -ib- am   ");//"new" is a keyword use for constructor.

console.log(gameNumber);
console.log(gameNumber.length);// ".lenght" is a type of String method.
console.log(gameNumber.toUpperCase()); // ".toUppercase()"is a type of String method.
console.log(gameNumber.charAt('1'));//".charAt('0')" checking the character in the position. 
console.log(gameNumber.indexOf('S'));//".indexof('S')" checking the position in the index.

console.log(gameNumber.substring(0,4));
console.log(gameNumber.slice(-9,4));
console.log(gameNumber.trim());
const url = "kneel5400@gmail.com"
console.log(url);
console.log(url.includes('kneel'));
console.log(url.includes('ohds'));
console.log(url.replace('neel', '20'));

let Passage="a quick brown fox jumpover the lazy dog"
console.log(Passage.split(" "));