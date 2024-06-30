const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const app = express();

app.use(express.json())

app.get('api/products', async (req, res) => {
    try {
        const products = await Product.find(req.body);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('api/product', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

mongoose.connect('mongodb+srv://lekareem21:o6vMspNNbvoiH8nG@cluster0.exr6s78.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!');
    app.listen(3030, () => {
        console.log("hello");
    });
  });