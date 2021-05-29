const express = require('express');
const firstApp = express();
const port = 6000;

const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/firstApp';

firstApp.use(express.json());

mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (err) => {
    if (err) {
        console.log(err)
            } else {
        console.log('database connection successful')
        }
})
