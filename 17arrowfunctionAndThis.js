const user = {

      name :"Abhi",
      course :1599,
      welcome : function(){
        console.log(`${this.name} , this is my name `); // this is used to gives the current value 
        console.log(this) // gives the current value of objects 
      }
}
user.welcome()
user.name="abi"
user.welcome()

console.log(this) // if i access out the object then this is object {}

////////////////////////////////// simple function mai this work kese krega  ////////////////////////

function chai (){
    let name = "abhi"
    //console.log(this) // kya dega kuch hai hi nhi hai 
    console.log(this.name) // undefined mtlb ye function pr ese kaam nhi krega 
}
chai()

const chai1= function(){
    let name = "abhi"
    //console.log(this) // kya dega kuch hai hi nhi hai 
    console.log(this.name) // undefined mtlb ye function pr ese kaam nhi krega 
}
chai1()

/////////////////////////////// arrow function ///////////////////////

const chai3 = () => {
    let username = "abhi"
    console.log(this)     // {}
}
chai3()


// agr {} breces mai likhna hai to return likna pdega 
// agr () mai likhna hai to return nhi likhna pdega 

// ye {} wala method hai 

const chai4 = (num1,num2)=>{
    return num1+num2
}
console.log(chai4(3,4)) // output is : 7

////////() wala method hai ye 

const chai5 = (num1,num2) => (num1+num2)

console.log(chai5(3,4))             // output will be : 7


//////////////// another method ////////////////////////

const addtwo = (num1,num2) => {username :"abhi"}  // undefined u can't access in object in this way 

console.log(addtwo(3,4))


const addtwo1 = (num1,num2) => ({username :"abhi"}) // undefined u can't access in object in this way 

console.log(addtwo1(3,4))









