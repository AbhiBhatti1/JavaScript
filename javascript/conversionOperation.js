let score="33abc"

console.log(typeof score) 
console.log(typeof (score))  

let valueinNumber =Number (score)

console.log(typeof  valueinNumber) // number 
console.log(valueinNumber)   //NAN


// if null value then 

let score1=null

console.log(typeof score1) 
console.log(typeof (score1))  

let valueinNumber1 =Number (score1)

console.log(typeof  valueinNumber1) // number 
console.log(valueinNumber1)   //NAN


// NOTES FOR REVISION

// undefined then NAN
// boolean value ke liye 1 for true
//"22" =>33
//"33abc"=>NAN
//true =>1 false =>0

let isloggedin=1  // abhi 

let booleanvalue=Boolean(isloggedin)
console.log(booleanvalue)


/*
1 =>true 0=> false
""=>false
"abhi"=>true
*/

let value=33

let string=String(value)
console.log(string)    // 33
console.log(typeof string)  //string 


// ********operation *****************//
let value1 =3
let negval=-value1
console.log(negval) //-3


let str1="hitesh"
let str2=" abhi"
console.log(str1+str2) // hitesh abhi

console.log("1"+2)
// Output: "12"

console.log(1+1+"2")
// Output: "22"

console.log("1"+1+1)
// Output: "111"

console.log(+true) 
// Output: 1
console.log(+false)
// Output: 0        

// true+ not valid 


let num1 , num2 ,num3
num1=num2=num3=2

console.log(num1,num2,num3) // 2 2 2    

let gamecounter=100
gamecounter++
console.log(gamecounter) // 101 

++gamecounter
console.log(gamecounter) // 102


