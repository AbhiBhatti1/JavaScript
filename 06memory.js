// stack and heap memory 

// primitve uses stack 
// heap uses in non primitve 

// defined in heap is a copy 
// defined in heap passes as an reference


let myname = "abhi"
console.log(myname)  // abhi


let anothername = myname

console.log(anothername)  // abhi

anothername="abhidhiman"

console.log(anothername)    // abhidhiman
console.log(myname)         // abhi

let object1={
     name:"abhi",
     agr:22
}

let object2=object1


object2.name="abhidhiman"

console.log(object2.name)
console.log(object1.name) // non primitve so one side change dono side changes

// by reference 




  

