const fs = require('fs')
const co = require('co')

const gen = function * () {
  yield 222222
  yield 444
  // yield fs.readFile('./Generator.js')
  // console.log(f1.toString())
  // console.log(f2.toString())
}

let f1 = gen().next()
// let f2 = read().next()
//
console.log(f1, 'f1')
// console.log(f2, 'f2')

co(gen).then(function (){
  console.log('Generator 函数执行完成');
}).catch(() => console.log('err'))
