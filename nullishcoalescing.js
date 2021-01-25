// undefined and null are the values which are short circuited to the right side making the behavioural code much more predictable
let a;
let b = null;
let c = '';
let d = 0;
let e = false;

let val = 'Hello World!';
const a1 = a ?? val
const b1 = b ?? val
const c1 = c ?? val
const d1 = d ?? val
const e1 = e ?? val

const f1 = a || val
const g1 = b || val
const h1 = c || val
const i1 = d || val
const j1 = e || val

console.log('------------Logical OR---------------')
console.log(f1) // = Hello World!
console.log(g1) // = Hello World!
console.log(h1) // = Hello World!
console.log(i1) // = Hello World!
console.log(j1) // = Hello World!

console.log('------------Nullish Coalescing-------')
console.log(a1) // = Hello World
console.log(b1) // = Hello World
console.log(c1) // = 
console.log(d1) // = 0
console.log(e1) // = false
