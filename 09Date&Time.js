let myDate = new Date()
console.log(myDate) // 2026-06-12T05:58:59.393Z

console.log(myDate.toString()) // Fri Jun 12 2026 11:30:08 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()) // Fri Jun 12 2026

console.log(myDate.toLocaleString()) // 6/12/2026, 11:33:00 AM

console.log(typeof myDate) // object

let myCreateDate=new Date(2026,7,12)  // array hai then 0 consider as jan

console.log(myCreateDate.toDateString()) // Mon Jan 12 2026
 

let newdate= new Date ("2026-01-22") // 01 consider as jan because this is not an arrays this is YYYY-MM-DD

console.log(newdate.toDateString()) // Thu Jan 22 2026 


let mytimestamp = new Date ()
console.log(mytimestamp) // 2026-06-12T06:12:27.986Z

console.log(mytimestamp.getTime()) // mili second always 


let newone = new Date()
console.log(newone)

console.log(newone.getMonth()+1) 

console.log(newone.getDay())

newone.toLocaleString('default',{
    weekday : "long"


})
