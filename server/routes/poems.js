const express = require('express')
const router = express.Router()

app.get('/random', (req, res) => {
    res.sendStatus(200)
    res.send('Discover a random poem!')
})

app.get('/:id', (req, res) => { 
    //changed  route from /poems to / and poems/random to /random, since they are all in the same route
    res.sendStatus(200)
    res.send('Get a poem with id ${req.params.id}')
})

module.exports = router