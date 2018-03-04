

### Generator

执行 Generator 函数会返回一个遍历器对象






#### yield

> 由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。


** yield表达式本身没有返回值 ** ，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值

```javascript

let a = yield 5

console.log(a) // undefined

```


### co

使用 co 的前提条件是，Generator 函数的yield命令后面，只能是 Thunk 函数或 Promise 对象

### async await

co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）

async函数的返回值是 Promise 对象

async函数内部return语句返回的值，会成为then方法回调函数的参数


async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到

必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数
