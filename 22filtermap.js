const coding =[1,2,3,4,5]

const num = coding.forEach( (item)=>{
  console.log(item)

})
/*output will be :
1
2
3
4
5
*/
// agr mai num ko print krwau to dekho kya ata hai 

//console.log(num) //undefined , but why return item kr do to v undefined hi aayega

// ham values ko kese access kre using filter() 

//const nums = [1,2,3,4,5,6,7,8,8]

//const mynums = nums.filter( (item)=> item>4 )
//console.log(mynums)  // output will be :-[ 5, 6, 7, 8, 8 ]


// another method 

//const mynums = nums.filter( (item)=> {
    //return  item>4    // 
//})

//console.log(mynums) // [ 5, 6, 7, 8, 8 ]


/// maine arrays  mai object banana hai aur koi speific cheez leni hai 

const arr = [{
    publish:2003 , mybook :"abhi"
},
{
    publish:1999 , mybook :"anjali"
}
]

let mybooks = arr.filter( (items)=> items.publish>=2000)
console.log(mybooks)  // output will be:-[ { publish: 2003, mybook: 'abhi' } ]

// if using {} then return jarur likho