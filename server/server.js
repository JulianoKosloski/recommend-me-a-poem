const express = require('express')
const app = express()

port = 3000 //TODO or system port defined in .env

app.listen(port)

app.use('myMiddleware')

app.get('/', (req, res) => {
    res.sendStatus(500)
    res.send('Starting the journey')
})

function myMiddleware(req, res, next) {
    console.log('Hello from the middle')
    res.json({
        message: "This is a JSON",
        id: 35,
        origin: "Mars"
    })
    next()
}