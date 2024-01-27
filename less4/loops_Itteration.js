for (let index = 0; index <=10; index++) {
 
    
    if (index===5){
        console.log("is the middle number");
    }
    console.log(`${index}`);
}


// Table creation
for (let table = 0; table <= 5; table++) {
    const element = table;
    console.log("table number",element);
    for (let i = 0; i <= 10; i++) {
        j = i * element;
        console.log(`${element} * ${i} is the equal to = ${j}`);
        
    }
}

//

let myarray=["flash","batman","superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log( element);
    for (let i = 0; i <=10; i++) {
        const j= i * index;
        console.log(`${i} *${index} = ${j}`);
        
    }
}

//break & continue

//break => use for when we get our value, and totaly ignore or terminate the loop , we use "break" statement.
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`detected "5"`);
        break
    }
    
    console.log(index);
}
//
//continue
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`detected "5"`);
        continue
    }
    
    console.log(index);
}

//While Loop

let myarray1=["arnab","neel","shibam"]
let index1=0
while (index1<myarray1.length) {
    console.log(`Value of my array ${myarray1[index1]}`);
    index1=index1+1
}

//do-while Loop=> it Also use for atleast one time execution.
let score=11
do{
 console.log(`score is ${score}`);
 score++
} while (score<=10);

