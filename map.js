let userData = new Map()
let word = 'Hello World'
let fun = function () {}
let newObj = {}
let newArr = [
  { id: 1, name: 'roshith' },
  { id: 2, name: 'peter' },
]
// * setting the values
userData.set(word, 'It a hello new world')
userData.set(fun)
userData.set(newObj, { id: 1 })
userData.set(newArr)
userData.set({ id: 2 }, 'Peter')

//  * getting the values
let res = userData.get('Hello World') //! word  ===  'Hello World'
let getId = userData.get({ id: 2 }) //! value is undefined, because newObj !== {}
console.log(res)
console.log(getId)

let users = { usename: 'User ka name' }
userData.set(users, newObj)
console.log(typeof fun, userData.size, userData)

let vegArr = [
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]
let iterateArr = new Map(vegArr)

// == iterate over keys (vegetables)
for (let arr of iterateArr.keys()) {
  console.log(arr) // ! cucumber, tomatoes, onion
}
// == iterate over values(amounts)
for (let arr of iterateArr.values()) {
  console.log(arr) // ! 500, 350, 50
}
// == iterate over  [key, values] entries
for (let arr of iterateArr) {
  console.log(arr) // ! cucumber,500 (and so on)
}

iterateArr.forEach((key, value) => console.log(key, value)) // ! cucumber: 500 etc

