
/* 
    GLOBALS - NO WINDOW !!!!
*/

// __dirname  --> لاگ کردن مسیرفعلی پروژه
// __filename --> نمایش نام پروژه

console.log("THE PROJECT IS ON THIS PATH  -> " + __dirname);
console.log("THE NAME AND PATH OF FILE IS -> " +__filename);

setInterval(() => {
    console.log("THE NAME AND PATH OF FILE IS -> " +__filename);

},1000)