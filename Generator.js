function * getName () {
  let a = 'yom'
  let c = yield '12rt3'
  // yield c
  return a
}


let end = getName()

console.log(end.next())
console.log(end.next())


function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);

let r = a.next() // Object{value:6, done:false}
let u = a.next() // Object{value:NaN, done:false}
let p = a.next() // Object{value:NaN, done:true}

console.log(r, u, p)

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13)


function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
