const path = require('path')

console.log(path.sep);
// console.log(process.env.PATH) - prints entire path settings to run excutables

const filePath = path.join('/contents', 'deepseas', 'texts', 'mytext.txt')

console.log("filepath : " + __dirname + filePath);

const base = path.basename(filePath)

console.log(`base file name : ${base}`);

const absolutePath = path.resolve(__dirname, 'contents', 'deepseas', 'texts', 'mytext.txt')

console.log(`Absolute path : ${absolutePath}`)

console.log(path.basename(absolutePath))