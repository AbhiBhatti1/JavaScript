const name = "abhi"
const name1=" abhi3"
console.log(name+name1)

const repocount= 3
console.log(name +repocount)

// using backtick for string intopulation 

console.log(`hello my name is ${name} and my repocount is ${repocount}`)

// another way to declare a stirng 

const name3 = new String ('abhi')
console.log(name3) // they give the key and value pair 

// key string and value is abhi

console.log(name3[2])

// gives the length 
console.log(name3.length)

// convert in uppercase letter but not change the original arrays
console.log(name3.toUpperCase())

console.log(name3.charAt(2)) // char kis pos pr hai wo dega ye

console.log(name3.indexOf('h')) // gives the index of the char 

const newString =name3.substring(0,2) // convert in substring 
console.log(newString) // last index is not included

// output will be ab

const anotherString = name3.slice(-5,2) // starting from the back // ab
console.log(anotherString)

// neg value only for slicing

const newStringOne="  abhii   "

console.log(newStringOne.trim()) // trim is used to remove the spaces

const url="https://abhi.com/abhi%20dhiman" // agr aapne space di hai to wo automatically %20 mai convert kr deta hai


console.log(url.replace('%20','-'))

// %20 to dhundo or - se repalce kr do 

// output is : https://abhi.com/abhi-dhiman

console.log(url.includes('bhatti')) // url mai dhudta hai ki url mai hai ya nhi agr nhi hai to false hai to true

console.log(name3.split('-')) // convert in array 

// output will be : [ 'abhi' ]

console.log(name3.bold()) // <b>abhi</b>

