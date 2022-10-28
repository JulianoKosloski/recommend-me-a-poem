const express = require('express');
const app = express();

const cors = require('cors');

require('dotenv').config({path: './config.env'});
port = process.env.port || 3000; //3000 or system port defined in .env

const dbo = require("./db/conn");

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log('Server is running on port ${port}');
});

app.use('myMiddleware');
app.use(express.json());

app.get('/', (req, res) => {
    res.sendStatus(200);
    res.send('Starting the journey');
});

app.get('/posts', (req, res) => {
    res.sendStatus(404);
    res.send('No post yet!');
});

function myMiddleware(req, res, next) {
    console.log('Hello from the middle');
    res.json({
        message: "This is a JSON",
        id: 35,
        origin: "Mars"
    });
    next();
};

const userRouter = require('./routes/users');
const poemRouter = require('./routes/poems');

app.use('/users', userRouter);
app.use('/poems', poemRouter);