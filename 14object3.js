const  course = {
    name : "abhi",
    fees : 2000,
    courseinstructor : 'abhidhiman'
}
const {fees} = course
console.log(fees)  // 2000

// if the fees is very big name then change 

const {fees :f} =course
console.log(f)  //2000

/// concept of api//

//.json

{
 "name":"abhi",
 "price": "free",
}