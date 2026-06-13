// singleton

// object user 

const jsuser = {
  name : "abhi",
  age  : 20 ,
  location : "himachal" ,
  lastplace : ["monday","saturday"]
}
// method to print the object
console.log(jsuser.name)

// another method to print the object

console.log(jsuser["name"])

//-----------------------------------------------------------------//
// u defined a symbol and access then how 

const sym = Symbol("mynewsymbol")

const jsuserr = {
      name : "Avhi",
      [sym] : "mynewsymbol"
}

console.log(jsuserr[sym])   // this is the method to access the symbol 

jsuserr.name = "abhidhiman"  // change the user name 
Object.freeze(jsuserr) // if u chnange any object then can't change bcz u freeze the object

jsuserr.name = "abhid" 


console.log(jsuserr)

 // function 

jsuser.greeting = function(){

   console.log("abhi");

}
console.log(jsuser.greeting) // output will be :- [Function (anonymous)] 
console.log(jsuser.greeting()) // output will be :- abhi



jsuser.greetingtwo = function(){

     console.log(`hello my name is , ${this.name}`) // this func is used to access the properties 

}
console.log(jsuser.greetingtwo())  // hello my name is , abhi   //undefined

