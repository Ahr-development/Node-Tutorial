//دسترسی به مسیریاب
const path = require('path')

console.log(path.sep)

//دسترسی به یک فایل توسط متد Path
const filePath = path.join('/contect','subfolder','test.txt')

console.log(filePath)

//دسترسی به نام فایل یافت شده
const base = path.basename(filePath)

console.log(base)


const findFile = path.resolve(__dirname,'assets','common','test.txt')

console.log(findFile)


//
const absolute = path.isAbsolute(__dirname,'assets','commokn','thest.txt')

console.log(absolute)