//reduce method

const num=[1,2,3,4]
const fib=num.reduce(function (accumu,curval){
    console.log(`accumulator value ${accumu} and current value ${curval}`);
    return accumu+curval
    } 
    ,0)
console.log(fib);