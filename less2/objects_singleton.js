//singleton object using constructor method
// print an  new empty Object__

//NON singleton empty object declaration.
const time = {}
console.log(time);//OUTPUT-> {}

//Singleton Object 
const tinder =new  Object()

console.log(tinder);// OUTPUT:> {}



//now we can directly add the values and keys in the object by using this syntax(Objectname.key="values") add some proterties in the single ton tinder object

tinder.id="12abc" ,
tinder.passwod="kshdkhk"
tinder.Full_name="akb"

console.log(tinder);

//User information( Object and key and values declaration).

const Userinfo= new Object()
Userinfo.Ids="Characters and number"
Userinfo.passwords="combination of character number and Symbols"
Userinfo.Hashword=Symbol("UseUniqueSymbol") ;
Userinfo.personal="aksjnjk"
console.log(Userinfo)
console.log(typeof Userinfo.Hashword);
console.log(Userinfo.personal);

//we can also use the nesting  Object.

const Newnested ={
    email:"akndl",
    fulsnd:{
            fulnmae :{
                lasad:{
                    skandkl:{
                        hal:"aksnd"
                    }
            }
         
            
            }
    }
}

console.log(Newnested.fulsnd?.fulnmae.lasad.skandkl)// "?" this question mark is use to check if the accesable value is not there then go to next nested object to find the value and go till the end to find the value and it also provide more security.

// Combine two or more Object elements in a Single Object Using Syntax({},Object.assign(Object name,Objectname))
const Onj1={ 1:"lnlas", 2:"alnc" }
const Onj2={ 3:"alsnl", 4:"lszlkc" }

const Onj3 = Object.assign({},Onj1,Onj2) 
console.log(Onj3);
console.log(typeof Onj3);

//Or we can use Spread Operator "variable_name= {...Onjectname,Object_name}""

let inida ={1:"russian",2:"ecef"}
let uk = {3:"Aadna",4:"sdn"}

let mere={...inida,...uk}
console.log(mere);

//we can access directly to a object by using the syntax( Object_name.[Object_no].nested Objectname)

console.log(Userinfo);
console.log(Object.keys(Userinfo));//we can access the object keys dicectly by using Syntax(Object.key(object_name))
console.log(Object.values(Userinfo));//we can access the object values dicectly by using Syntax(Object.Values(object_name))

console.log(Userinfo.hasOwnProperty('aksjnjk'));// we can find any Key property are Exist in the Object or not by Using the Syntax(object_name.hasOwnProperty('key_name'))