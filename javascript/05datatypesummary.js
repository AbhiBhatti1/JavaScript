// primitive datatypes

//7 types of primitive datatypes

// string , number, bigint, boolean, null, undefined, symbol

const score =100

const scoreValue =100n // bigint

const isLoggedIn =false 

const outsideTemp =null

let userEmail; // undefined

const id =Symbol("123") // symbol

const anotherid =Symbol("123")

console.log(id==anotherid) // false dekhne mai same hia vese same nhi hai 

const bignumber = 44344434534534535n // at end n then big int ho jayega 

console.log(bignumber) // 44344434534534500



 
// reference datatypes or non primitive datatypes

// object, array, function


const heros =["shaktiman","doga","nagraj"] // array

console.log(heros[0]) // shaktiman

const obj={
      name:"sachin",
      age: 48,
      isRetired:true
}

console.log(obj.name) // sachin

console.log(obj.age)  // 48


const myfunction =function(){
  console.log("hello world")
}

console.log(typeof obj) // object

console.log(typeof bigint) // undefined

console.log(typeof scoreValue) 





