
//THIS COMMAND ACCESS TO INFORMATIONS OF OS CURRENT USER SYSTEM
const os = require('os')

const userName = os.userInfo().username

/* 
setInterval(() => {
    console.log(`The System Uptime is ${os.uptime()} by Secounds`)
},1000)

 */


//DEVIDED BY 1024 IN THREE LEVEL CONVERT FROM BYTE TO GB
const currentOS = {
    systemName:os.type(),
    release:os.release(),
    totalMemory:os.totalmem() /1024 / 1024 / 1024 ,
    freeMemory:os.freemem() /1024 / 1024 / 1024
}

console.log(currentOS)