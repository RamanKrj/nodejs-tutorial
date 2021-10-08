const os = require('os')

// info about current user
const user = os.userInfo();

console.log('userinfo : ', user)
console.log(`User : ${user.username}.
Home Directory : ${user.homedir}.`)

// Method returns the system uptime in sec
console.log(`The system uptime is : ${os.uptime()} sec.`)

const currentOs = {
    system: os.cpus(),
    hostName: os.hostname(),
    cpuArtitecture: os.arch(),
    name: os.type(),
    version: os.version(),
    release: os.release(),
    totalMem: os.totalmem(),
    usedMem: os.freemem()
}
console.log(currentOs);