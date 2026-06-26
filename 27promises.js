const promiseOne = new Promise(function(resolve,reject){

    // do an async task 
    //db calls , cryptoraphy , 

    setTimeout(function(){
        console.log('task is complete')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consume")
}) // connection to resolve 
 
// another method 

new Promise(function(resolve,reject){

    // do an async task 
    //db calls , cryptoraphy , 

    setTimeout(function(){
        console.log('task is complete')
        resolve()
    },1000)
}).then(function(){
    console.log("promise consume")
}) // connection to resolve 

const promisethree = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve(
            {username : "chai" , email : "abhibhatti.com"})

    },1000)
})

promisethree.then(function(user){
    console.log(user)

})


// fourth promise 

const promisefour = new Promise (function(resolve,reject){
setTimeout(function(){

    let error = false
    if(!error){
        resolve({username : "abhi"})
    }
    else{
        reject("error something went wrong")
    }
} , 1000)


})

promisefour
.then( (user)=>{
console.log(user)
return user.username

})
.then((username)=>{

console.log(username)
})
.catch(function(error){
    console.log(error)
})

.finally( ()=> console.log("the promise is resolve or rejected")
)

const promisefive =  new Promise(function(resolve,reject){

      setTimeout(function(){
        let error = false

        if(!error){
            resolve({
                username:"javascript"
            })
        }
        else{
            reject("not solved")
        }
      },1000)
})

// async function consumePromiseFive(){
//   const response = await promisefive   // await is the object
//   console.log(response)
// }         // wait krta hia kaam ka ho gya then chlta hia 


// consumePromiseFive()

// another method for promise wala how to accesss


async function consumepromisefive(){


    try{
        const response = await promisefive
        console.log(response)
    }
    catch(error){
        console.log(error) 
    }
}
consumepromisefive()



fetch()

.then( ()=>

)

 