const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('HOME')
    } else if (req.url === '/about') {
        res.end('JGGA')
    } else {
        res.end(`
            <h1 style="margin:40px; color:blue;">OPS!</h1>
            <p>WTF!</p>
        `)
    }
})

//Available in PORT http://localhost:5000/
server.listen(5000)