const sayMyName = (name) => {
    console.log(`Your Name is ${name}`);
    
    setTimeout(() => {
        if (name == "Walter White") {
            console.log("You ARE GOD DAMENT RIGHT!");
        }
        
    },3000)
}



module.exports = sayMyName