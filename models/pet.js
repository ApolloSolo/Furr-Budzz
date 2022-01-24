const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    species:{
        type: String,
        enum: ['dog', 'cat', 'fish', 'reptile', 'bird', 'other']
    },
    location: {
        type: String,
    },
    description:{
        type: String,
        required: true
    },
    img: {
        type: String
    }
});

module.exports = mongoose.model('Pet', petSchema);