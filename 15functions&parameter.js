function myname (){
    console.log("a")
    console.log("b")
    console.log("h")
    console.log("i")

}
myname()   // myname is reference // myname() this is execution

function addtwonumbers(num1 , num2 ){  // type nhi dete hai 
    // parameters
     console.log(num1+num2)
}
addtwonumbers(2,3)   // 5
// arguments

const result = addtwonumbers(2,3)
console.log(result)     // undefined

// but why ?

// using method see 

function addtwonumbers2(num1 , num2 ){  // type nhi dete hai 
    // parameters
     let result = num1 + num2  // or  return num1+num2
     return result
}
const result1=addtwonumbers2(2,3)
console.log(result1) // answer is  5 
 

function userlogin (username){
  return `${username} just logged in`
}
const newone = userlogin("abhi")
// or  console.log(userlogin("abhi"))
console.log(newone)

// if i don't know how many perameters

function calculatecarprices(...num1){
        return num1
}
console.log(calculatecarprices(2,3,4))  // [2,3,4]


function calculatecarprices(val1 , val2 ,...num1){
        return num1
}
console.log(calculatecarprices(2,3,4,4,5)) // [4,4,5]

// object se function calling krna 

const objname = {
    name : "abhi",
    age : 23
}

function calculateobj(objehandle){
     return ` my name is ${objehandle.name} and my age is ${objehandle.age}`  //  my name is abhi and my age is 23

}

console.log(calculateobj(objname))
// same as arrays concept bs 

const myarr = [10,20,30,40]

function mynewarr(myone){

    return myone[0]
}

console.log(mynewarr(myarr))   // 10 


