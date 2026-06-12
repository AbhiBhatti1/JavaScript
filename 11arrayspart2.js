const heros = [3,45,2,2,32,423,4]
const hero = [1,23,4,5,5]


// push exsisting array mai change krta hai 
heros.push(hero)   // ye array ke bich mai array daal deta hai , array ko sath mai ek array mai nhi jodta
console.log(heros)  // [ 3, 45, 2, 2, 32, 423, 4, [ 1, 23, 4, 5, 5 ] ]

// concat new array mai krta hai see example in allheros 
heros.concat(hero) // same as push
console.log(heros)

const allHeros = heros.concat(hero)
console.log(allHeros) // [ 3, 45, 2, 2, 32, 423, 4, [ 1, 23, 4, 5, 5 ], 1, 23, 4, 5, 5 ] 

const newheros = [...heros,...hero]
console.log(newheros)  // same as concat  output 

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]  // if situation is this then how do you defined

const realanotherarr = anotherarray.flat(Infinity) // .flat(depth)

console.log(realanotherarr)
// output will be this 
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

// check kro ki ye array hai ya nhi 
console.log(Array.isArray("abhi")) // false ye array nhi hai 

// ab isko array bnao , convert in array 

console.log(Array.from("abhi")) // [ 'a', 'b', 'h', 'i' ]

// object ko directly convert nhi krta hai 

console.log(Array.from({name :"abhi"}))  // [] output


// alg alg value ko kese array mai lena hai with th
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]





