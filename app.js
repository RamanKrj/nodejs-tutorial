// npm --version

// local dependecy - use it in a project only
// install : npm -i <pakage name>

// global dependency - use it globally in any project
// install : npm -g <pakage name> 

// package.json : manifest file - stores package/project information
// This can be created mannualy in the root of the peoject
// or npm init (an step by step  process, at any step press enter to go with the default value)
// npm init -y ( with default value )

const _ = require('lodash')

const numArray = [1, [2, 3],
    [4]
]
const fullName = [
    ['Raman'],
    ['Kumar'],
    ['Jha']
]

const numArrayFlat = _.flattenDeep(numArray);
const nameFlat = _.flattenDeep(fullName)

console.log(numArrayFlat)
console.log(nameFlat)