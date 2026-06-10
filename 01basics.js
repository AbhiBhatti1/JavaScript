console.log("hello world"); // to print the output 

// variables in javascript

const accountId=12345            // const can't be change 
let accountemail="abhi"          // let bhi use kr skte hai 
var accountpassword="12345"    
 /* 
prefer not to use var bcz issue in scope and functional scope
*/
accountcity="amb" // invalid but possible 

let accountstate // undefinded if not declare any value


// accountId=2// not allowed

console.log(accountId)  // errror can not change

accountemail="anjali"
accountpassword="34322"
accountcity="amba"

console.log(accountemail)
console.log(accountpassword)
console.log(accountcity)

// u also create a table intead of all console 

console.table([accountId,accountemail,accountpassword,accountcity])
// output will be 

//┌─────────┬──────────┐
//│ (index) │ Values   │
//├─────────┼──────────┤
//│ 0       │ 12345    │
//│ 1       │ 'anjali' │
//│ 2       │ '34322'  │
//│ 3       │ 'amba'   │
//└─────────┴──────────┘


console.table([accountId,accountstate , accountemail,accountpassword,accountcity])

/*
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 12345     │
│ 1       │ undefined │  undefind for can't decalre any variable value
│ 2       │ 'anjali'  │
│ 3       │ '34322'   │
│ 4       │ 'amba'    │
└─────────┴───────────┘
*/
















