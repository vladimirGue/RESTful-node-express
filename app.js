const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const db = mongoose.connect('mongodb://localhost/bookAPI');
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);
//const authorRouter = require('./routes/authorRouter')(Author);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', bookRouter);
app.get('/', (req, res) => {
    res.send('welcome to my Nodemon API');
})
app.listen('3000', function () {
    console.log('server is running');
});