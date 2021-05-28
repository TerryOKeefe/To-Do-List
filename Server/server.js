// setup express and bodyParser
const express = require('express');
const bodyParser = require('body-parser');

// acquire data from todo.router.js
const listRouter = require('./routes/todo_router.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use('/books', listRouter);

// serve back static files
app.use(express.static('server/public'));

// start listening for requests on this PORT
const PORT = 5000;
app.listen(PORT, () => {
    // console log this in terminal when server start
    console.log('listening on port', PORT);
});