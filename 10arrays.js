const myarr = [0,1,2,4,5,3,4,true,"abhi"]
console.log(myarr[0]) // gives the 0th valyes

console.log(myarr)  // gives the whole arrays

// another way to declare a arrays 
const myarr2= new Array(1,2,3,4,5)

console.log(myarr2.length) // length is not a function 


/// push the value at end 
myarr.push(2)
console.log(myarr) 

myarr.push(3)
console.log(myarr) 

// last element is remove 
myarr.pop()
console.log(myarr)

myarr.unshift(9)  // print the value at the fist of the araaus
console.log(myarr) 

// but the main problem is sabhi element bhi aage to shift honge

myarr.shift()
console.log(myarr) // remove value jo aapne unshift se add kri thi 

// means first value is remove

console.log(myarr.includes(9)) // check the 9 is included or not  if not then return false

console.log(myarr.indexOf(8)) // if nor exsist then gives -1 

const newarr = myarr.join()
console.log(myarr)
/*
output
[
  0, 1,    2,
  4, 5,    3,
  4, true, 'abhi',
  2
]

*/

console.log(newarr)

// 0,1,2,4,5,3,4,true,abhi,2 and also chnage the type of the arr
// join converts in string format 


const arr1 =  new Array (0,1,2,3,4,5,6)
console.log(arr1.slice(1,3))
console.log(arr1.splice(1,4))

const arr2 = new Array (1,2,4,5,6)
console.log("A",arr2)  // A [ 1, 2, 4, 5, 6 ]
console.log(arr2.splice(1,4))

let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(1, 2);  // removes 2 elements starting at index 1
console.log(removed);            // [2, 3]
console.log(arr);                // [1, 4, 5] ← changed!






