//clouser - it is use for Encapsulation/hide the data
//it means we we encrypte the data but still able to use the function

function outer(){
    let n= console.log("HI I AM NEEL");
    function inner(){
        console.log(n);
    }
    return inner
}

let n1=outer()

n1()