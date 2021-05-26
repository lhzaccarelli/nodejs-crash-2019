const http = require('http')
const path = require('path')
const fs = require('fs')

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content)
        })

    }

    // API Example
    if (req.url === "/api/users") {
        const users = [
            { name: 'John Doe', age: 40 },
            { name: 'Bob Smith', age: 20 },
        ]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    }
})


server.listen(PORT, () => console.log(`Server running on port ${PORT}`))