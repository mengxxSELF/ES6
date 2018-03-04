const fs = require('fs')

fs.readFile('./readme.md', (err, buffer) => {
  // console.log(buffer.toString())
})

//
const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data.toString());
    });
  });
};


// readFile('./readme.md').then(res => console.log(res))



// const gen = function * () {
//   const f1 = yield readFile('./readme.md');
//   const f2 = yield readFile('./git');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };


const asyncReadFile = async function () {
  let f1 = await readFile('./readme.md')
  let f2 = await readFile('./promise.js')
  // console.log(f1.toString());
  // console.log(f2.toString());
  return f1
};

asyncReadFile().then((data) => console.log('ee', data))
