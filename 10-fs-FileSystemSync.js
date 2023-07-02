const { readFileSync, writeFileSync } = require('fs')

//خواندن یک فایل متنی
//توصـــــــــــیه نمیشود
//فایل 11 را بررسی کنید
const horayText = readFileSync('./assets/horay.txt','utf8')
const appleText = readFileSync('./assets/common/test.txt','utf8')

console.log(`This is horay ${horayText} and this is apple ${appleText}`);

//ساخت یک فایل متنی
writeFileSync(`./assets/common/snapshot-${Math.random()}.txt`,`${horayText} Rules is Now`,{flag: 'a'})