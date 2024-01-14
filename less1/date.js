// "Date" is an Object.
//let date=new Date()
//console.log(typeof (date));
//console.log(date.toString());
//console.log(date.getUTCMilliseconds(date.toTimeString()));
//console.log(date.toLocaleDateString());
//console.log(date.toLocaleString());

//let myDate= new Date(2023/*yyyy*/,0/*mm*/,1/*dd*/,03 /*hr*/,04/*min*/ , 49 /*sec*/)
//console.log(myDate.toLocaleString());
//console.log(myDate.toDateString());

//For Specific Date mm yy with precise mili seconds.

let date2= new Date("2023-01-23")
console.log(date2.toLocaleString());
console.log(date2.toDateString()); 
console.log(date2.getTime()); 
console.log(date2.getDay()); 
console.log(date2.getHours()); 
console.log(date2.getMilliseconds()); 


// for miliseconds we use "date.now"as method.

let myTimestap = Date.now()
console.log(myTimestap);

// for Convert Seconds we use "Math.floor(Date.now()/1000)"
console.log(Math.floor(Date.now()/1000))



