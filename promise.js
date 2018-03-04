let time = () => {
  let i = 0
  setTimeout(() => {
    i = 20
    return i
  }, 1000)
}

let end = time()

console.log(end)

let end2 = new Promise((resolve, reject) => {
  let i = 0
  setTimeout(() => {
    i = 20
    resolve(i)
  }, 1000)
})

end2.then((i) => {
  console.log(i, 'i')
})
