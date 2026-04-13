//docker run -d -p 27017:27017 --name mongo mongo:latest

const mongoose = require('mongoose');

const connectDB = async () =>{
    mongoose.connect('mongodb://localhost:27017/train_ticket_booking')
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Could not connect to MongoDB', err));
}

module.exports = connectDB;