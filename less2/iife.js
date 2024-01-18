//IIFE- Immediate Invoke Function Expression
// it is use to prevent from the global scope Polution.
// it is execute immediately.

//Syntax named iife (functon function_name(){defination// localscope}) ();
(function neel(num) {
     num=num+1
     user="DB Connected"
     console.log(`${user}  ${num}`);
})(1);//We must end it so error not occour

//unnamed iife
((name)=>{
    console.log(`welcome ${name}`);
})('arnab');

//Write two  iife in one file. 
(function neel(num) {
     num=num+1
     user="DB Connected"
     console.log(`${user}  ${num}`);
 })(1);//We must end it so error not occour

 //unnamed iife
 ((name)=>{
    console.log(`welcome ${name}`);
 })('arnab');