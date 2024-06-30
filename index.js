const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

mongoose.connect('mongodb+srv://lekareem21:o6vMspNNbvoiH8nG@cluster0.exr6s78.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!');
    app.listen(3030, () => {
        console.log("hello");
    });
  });