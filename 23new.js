const mynums1 = [1,2,3,4,5,6,7,7,8,9]

const newnums=mynums1.map((nums)=>  nums+10 )  //.map add krega values //.filter whi vlaue dega jab tk comdition nhi lgayi hogi
console.log(newnums)
/* output will be:
[
  11, 12, 13, 14, 15,
  16, 17, 17, 18, 19
]
*/
/* jab filer use kiya to values aayi , kyuki filter condition ke sath chlta hai
[
  1, 2, 3, 4, 5,
  6, 7, 7, 8, 9
]
*/

// double map ka use bhi kr skte ho 
//.map((nums)=>  nums+10 )  phle 10 add hua 
//.map((nums)=>  nums+1)   fir 10 ke baad ek add hua 11 
//.filter((nums)=>nums>=40) // whi values dega jo 40 se bdi ya braber hogi

// .reduce method using simple function method

const arrays1=[1,2,4]

 const mynums2 = arrays1.reduce( function (acc,currval) {
    console.log(`my acc is ${acc}  and value is ${currval}`)
   return acc+currval
 },0)
 console.log(mynums2)
/*
output will be:
my acc is 0  and value is 1
my acc is 1  and value is 2
my acc is 3  and value is 4
7
*/


/* firstly accumulator ki val 0 hogi jo hmne },0 likhi hai 2nd time jo return hoga wo accumator ki value hogi
*/

////////// usign arrow function //////////////

const mytotal = arrays1.reduce ( (acc,currval)=> acc+currval ,0)
console.log(mytotal)

// maine class mai object diye

const myobj =[{
    price:900,
    course:"c++"
},
{
    price:900,
    course:"c++"
},
{
    price:900,
    course:"c++"
}
]

const newone = myobj.reduce( (acc , item)=>acc+item.price,0)
console.log(newone)
