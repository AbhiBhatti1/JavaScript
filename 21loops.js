// for loop 

//const arr =[1,2,3,4,5,6]

for(let i = 0 ;i<10 ;i++){
    const element = i
    //console.log(element)
}

 
// while loop and do while
let index =0

while(index<10){
    //console.log(`value is ${index}`)
    index++;
}

let score =11
do{
   //console.log(score)
   score++

} while(score<11);

// for of
let arr =[1,2,3,4,5,6]  
for(const num of arr){
    //console.log(num)     // for of loop mai value deta hai for in loop mai uske index
}

for(const num in arr){
    //console.log(num)
}
// Maps

const map = new Map ()
map.set('in' , 'india')
//console.log(map)

for(const [key , value] of map){
    //console.log(key, value )
}


// object 

const objecty ={

// not for of loop is iterable in the object 


}

// for in loop in used for object 

const myobject ={

  js : "javascipt",
  cpp : "c++"

}

for(const key in myobject){

    //console.log(key,myobject[key])
}

/// forEach function

const coding = ["Abhi" , "dhiman"]

// name of the arr.forEach (function ( argument){  body }) // function ke baad function name nhi likhna hota

//coding.forEach(function(num){
    //console.log(num)
//})
// output will be := Abhi
                     dhiman

// using arrow method 

coding.forEach( (num)=> {
console.log(num)


})