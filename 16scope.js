/////////////////////////////////////// scope part 1 ////////////////////////////////
// let a = 10 
// const b=20
// var c = 30 

if(true){
     let a = 10 
     const b=20
     var c = 30 
}

//console.log(a)  // a is not defined 
//console.log(b) // b is not defined
console.log(c)  // c =30  because using var 

let d =10

if(true){
    let d =100
    const e =20
    console.log("index is : ",d)  // local variable ki d ki value 
}
console.log(d) // global variable ke d ki value 

////////////////////////////// scope part 2 /////////////////////////////////////////////

function one (){
      const username ="abhi"

    function two (){

        const website = "yt"
        console.log(username)  // username is access because two() is child and child acess the properties of parents function one ()
    }
    
    //console.log(website)  // website value is in func two they can't access
        two()
    
}
one()

// another example 

if(true){
    const username = "abhi"
    if(username=="abhi"){
        const lastname ="dhiman"
        console.log(username + lastname ) // print ho jayega 
    }
    //console.log(lastname) // can't access outside the condition
    

}
//console.log(username)  // can't access outside the condition

// another example ////////////////////////

function addone(value){
     return value+1

}
console.log(addone(5))
////another mehtod to decalre a function 

const addtwo = function(num){
    return num+2
}
console.log(addtwo(5))

