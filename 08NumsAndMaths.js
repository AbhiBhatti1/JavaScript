/*
const number =200   // simple output 
console.log(number) // 200

const newnumber = new Number(300) // gives the 300 is a number 
console.log(newnumber) // [Number: 300]

console.log(newnumber.toString())// 300
console.log(newnumber.toString().length) // 3

console.log(newnumber.toFixed(2)) // 300.00

// . ke baad ki 2 value fixed

const othernumber=23.44
console.log(othernumber.toPrecision(3)) // 23.4

console.log(othernumber.toPrecision(2)) // 23

const othernumber1=231.49
console.log(othernumber1.toPrecision(4))  // read again 231.5

const num = 100000
console.log(num.toLocaleString())  // 100,000 
// gives the output in american standard 

console.log(num.toLocaleString('en-IN')) // 1,00,000
*/

// gives the input in indian standard

// ++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(Math) // Object [Math] {}

console.log(Math.abs(-3)) // 3

console.log(Math.round(8.9)) // 9

console.log(Math.ceil(5.6)) // 6

console.log(Math.max(4,5,63,22)) // 63
// same as min concept 

console.log(Math.floor(3.5)) // 3

console.log(Math.random()) // random value but in between 0 to 1 only 

console.log((Math.random()*10)+1) // tp avoid the 0s

// agr floor value chahiye ho to 

console.log(Math.floor(Math.random()*10)+1)

// agr value hme 10 se jyada chahiye ho to 

const min = 10 
const max = 20 

console.log(Math.floor(Math.random()*(max-min+1))+min)




