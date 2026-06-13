// single ton object 
 const tinderuser = new Object ()
 console.log(tinderuser)    // output will be :- {}


 // multiton object 
 const tinderuser1 = {}
 console.log(tinderuser1) // output will be :- {}

 // object values 

 const tinderuser2 = {}
  tinderuser2.name = "abhi",
  tinderuser2.age=3

  console.log(tinderuser2) // { name: 'abhi', age: 3 }
  
  // nested objects and how to access the values 
const user = {
    name :{
        defineduser:{
            namew:"abhi",
            age : 3
        }
    }
}
console.log(user.name.defineduser.namew) // output will be : abhi

// how to merge two objects 

const obj1 = {1 : "abhi" , 2 : " abhii"}
const obj2 = {3 : "aman" , 4 : "amana"}

console.log(obj1,obj2)  // { '1': 'abhi', '2': ' abhii' } { '3': 'aman', '4': 'amana' }

const obj3 = Object.assign(obj1, obj2)
console.log(obj3) // { '1': 'abhi', '2': ' abhii', '3': 'aman', '4': 'amana' }

// best method is this 
const obj4 = {...obj1,...obj2}
console.log(obj4)  // { '1': 'abhi', '2': ' abhii', '3': 'aman', '4': 'amana' }

// access the keys 
console.log(Object.keys(tinderuser2)) // [ 'name', 'age' ]

// acess the values 
console.log(Object.values(tinderuser2)) // [ 'abhi', 3 ]

// arrays mai values aa jati hai sari ki sari 

console.log(Object.entries(tinderuser2))  // [ [ 'name', 'abhi' ], [ 'age', 3 ] ]

// property dekho hai ya nhi hai 

console.log(tinderuser2.hasOwnProperty('age'))  // true






