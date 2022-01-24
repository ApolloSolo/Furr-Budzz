const express = require('express')
const port = 3000;
const app = express()
const path = require('path');
const mongoose = require('mongoose');
const Pet = require('./models/pet');

mongoose.connect('mongodb://localhost:27017/furr-budzz') 
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch((e) => {
        console.log("Oh No, Mongo Error Dude")
        console.log(e)
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.render("home"); 
})

app.get('/pets', async (req, res) => {
    const pets = await Pet.find({});
    res.render('index', { pets })  
}) 

app.listen(port, () => {
    console.log(`Server Connected. Listening On Port ${port}`);
})