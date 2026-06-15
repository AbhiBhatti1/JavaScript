////////// if statement 

if(2=="2"){   // synrax
    console.log("Executed")
}

// === for check the type 
// == check both are same 
// = assign the value
const temp =50

if(temp===25){
    console.log("less than 50")
}
else{
    console.log("temp is greater than 25")
}

const val = 1000

if(val>500) console.log("test")

// && || !  and or not 

//const total = true;

// switch(day){
//     case 1: 
//     break;

//     default :
//     console.log()
//     break;
// }
// agr case 2 match ho gya or usne sare code execute krega default ko shod kr 

const month = " march "

switch (month){
    case "jan" : console.log("jan")
         break;
    default :  console.log(" not match ")
    break;
}

// falsy  value :- false , 0 , -0 , bigint , 0n , "" , null . undefined ,nan
// truly value :- [] , "0" , "false" , " " , {},function (){}

// for arrays

const email = []
if(email.length===0){
    console.log(" not in arrays")
}

// for object 

const obj = {}
if(Object.keys(obj).length===0){ // ye array mai convert kr dega so ese krna hia hmne 
    console.log("not defined")
}

/// nulish coalescing operator (??) null undefined

let val1;
val1 = 5 ?? 10 
console.log(val1)  // 5

let val2;
val2 = null ?? 10
console.log(val2)  // 10 

let val3;
val3 = undefined ?? 15
console.log(val3)          // 15

//////////////////// ternary operator

const price  =10 
price > 5 ? console.log("this is greater than") : console.log(" not greater than ")

