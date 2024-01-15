// singleton -  it is created by the constructor .
// singleton - or if the singleton not created by the constructor it will created multiple instances
//"new" is use to create Singleton Object or constructor object.
// "Arnab()" it is a constructor
//constructor method (Object.create)

//object Littrals>>>

const jsUser =  {
name:"arnab",
roll:21,
jsUser1:65,
email: "anrksewl@gmail.com",
isLoggeding: false,
LastLoggedindate:["gre","mat"],
"fullname" : "arnab karmakar" // we cannot access the "fullname" key cause it is in the inverted string.
} 
console.log(jsUser,jsUser.email)
//another type of access the key values by (object_name[key])
console.log(jsUser['email','roll',"name",'fullname']);
//object creation done( variablename={key:values})


// Use symbol as a key. (interview purpose)
let Sum=Symbol("kree")

let Gum={
   [Sum]: "kewt" 
}
console.log(Gum);


//// Change the Key value SYNTAX: Object_Variable["key"]="replaceing value"

jsUser["fullname"]="godatnkslsasc"
Gum[Sum] = "anfknanf";

console.log(jsUser);
console.log(Gum);

// to DONOT CHANGE or Freez the object structure we use ("Object.frezz(varable_name)")

Object.freeze(jsUser);
Object.freeze(Gum);

jsUser["fullname"]="unchc"
Gum[Sum] = "anf";
 
console.log(jsUser);
console.log(Gum);

// this - keyword

const Wat={
    kwn:838,
    ehjk:"mdnjdk",
    jskjds:"kjbds",
    Mknzx:"szbs"
};

Wat.greeting = function (){
   
 console.log("hellow");
}

Wat.greetingTwo = function (){
    console.log(`hellow ${this.ehjk}`);
}
console.log(Wat.greetingTwo());

console.log(Wat.greeting);


