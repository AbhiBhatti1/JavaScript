// immedaitely invoked function expression (IIFE)

(function chai (){
    console.log(`db connected`)
}) () ; // end bhi krna pdta hai iifs ko nhi kiya to baki ke nhi chlengai

(()=>{
    console.log(`my name is abhi`)
}) ();          // run ho gya 


// variable kese pass kre

((name)=>{
    console.log(`my name is ${name}`)
}) ("abhi");          // run ho gya 

