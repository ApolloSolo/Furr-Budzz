const mongoose = require('mongoose');
const Pet = require('../models/pet');
const cities = require('./cities');
const { names, species, description, img } = require('./names');

mongoose.connect('mongodb://localhost:27017/furr-budzz') 
    .then(() => {
        console.log("Mongo Connection Open")
    })
    .catch((e) => {
        console.log("Oh No, Mongo Error Dude")
        console.log(e)
    })

    const seedDB = async () => {
        await Pet.deleteMany({});
        for(let i = 0; i < 100; i++){
            const random5 = Math.floor(Math.random() * 5)+1;
            const random35 = Math.floor(Math.random() * 35)+1;
            const random1000 = Math.floor(Math.random() * 1000)+1;
            const age = Math.floor(Math.random() *15)+1;
            const pets = await new Pet({
                name: names[random35],
                species: species[random5],
                location: `${cities[random1000].city}, ${cities[random1000].state}`,
                description: description[random5],
                age: age,
                img: img[random35]
            })
            await pets.save();
        }
    }
    
    seedDB().then(() => {
        mongoose.connection.close();
    })