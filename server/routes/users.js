const express = require('express')
const router = express.Router()

app.post('/', (req, res) => {
    res.sendStatus(200)
    res.send('Be our first user!')
})

app.post('/poems', (req, res) => {
    res.sendStatus(200)
    res.send('Upload a new poem of your own!')
})

module.exports = router