const {readFile,writeFile} = require('fs')

console.log('STARTING TASKS')


readFile('./assets/horay.txt','utf8',(err,result) => {
    if (err) {
        console.log(err)
        return //چرا ریترن قرار گرفت؟ بخاطر اینکه وظیفه الس را در شرط انجام دهد و نگذارد ریزالت لاگ شود
    }
    
    const horay = result
    let appletxt = null

    readFile('./assets/common/test.txt','utf8',(err,result) => {
        if (err) {
            console.log(err)
            return //چرا ریترن قرار گرفت؟ بخاطر اینکه وظیفه الس را در شرط انجام دهد و نگذارد ریزالت لاگ شود
        }

        writeFile('./assets/common/allcompany.txt',`${result} + ${horay} + GIVE US!`,(err) => {
            if (err) {
                console.log(err)
                return //چرا ریترن قرار گرفت؟ بخاطر اینکه وظیفه الس را در شرط انجام دهد و نگذارد ریزالت لاگ شود
            }

            console.log("DONE TASKS")
        })
    })

    console.log("END!")
})

/* writeFile('./assets/snapp.txt','Hello From Seatell',(err) => {
    if (err) {
        console.log(err)
        return //چرا ریترن قرار گرفت؟ بخاطر اینکه وظیفه الس را در شرط انجام دهد و نگذارد ریزالت لاگ شود
    }
})
 */


//در متد های غیر اسینک همواره استفاده از کال بک الزامی است