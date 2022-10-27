const express = require('express')
const app = express()

port = 3000 //TODO or system port defined in .env

app.listen(port)

app.use('myMiddleware')

app.get('/', (req, res) => {
    res.sendStatus(200)
    res.send('Starting the journey')
})

app.get('/posts', (req, res) => {
    res.sendStatus(404)
    res.send('No post yet!')
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

const userRouter = require('./routes/users')
const poemRouter = require('./routes/poems')

app.use('/users', userRouter)
app.use('/poems', poemRouter)