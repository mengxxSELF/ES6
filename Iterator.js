var it = makeIterator(['a', 'b'])

function makeIterator (ary) {
  let i = 0
  let len = ary.length
  return {
    next: () => {
      return { value: ary[i++], done: i < len ? false : true }
    }
  }
}

let a = it.next() // { value: "a", done: false }
let b = it.next() // { value: "b", done: false }
let c = it.next() // { value: undefined, done: true }
let d = it.next() // { value: undefined, done: true }

// console.log(a, b, c, d)

Array.prototype.iterator = function () {
  let i = 0
  return {
    next: () => {
      return { value: this[i++], done: i < this.length ? false : true  }
    }
  }
}

let array = [ 'a', 'b', 'c', 'd' ].iterator()

let a1 = array.next() // { value: "a", done: false }
let b1 = array.next() // { value: "b", done: false }
let c1 = array.next() // { value: undefined, done: true }
let d1 = array.next() // { value: undefined, done: true }
let e1 = array.next() // { value: undefined, done: true }


console.log(a1, b1, c1, d1, e1)


// let obj = { name: 'toy', age: 13 }
//
//
// Object.prototype.iterator = function () {
//
// }

//  iterator


var someString = "hi";
typeof someString[Symbol.iterator]
// "function"

var iterator = someString[Symbol.iterator]();

let q = iterator.next()  // { value: "h", done: false }
let w = iterator.next()  // { value: "i", done: false }
let e = iterator.next()

console.log(q, w, e)
