const sayHi = (name) => {
    setTimeout(() => console.log(`Hello there ${name} !!`), 1000)
}

// module export as a function, default, 
module.exports = sayHi