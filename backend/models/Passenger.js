//npm install mongoose
// docker run -d -p 27017:27017 --name mongo mongo:latest

const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
    passengerId: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    birth_preference: {type: String, required: true, enum: ['window', 'aisle', 'middle', 'No Preference'], default: 'No Preference' }
});

module.exports = {
    Passenger: mongoose.model('Passenger', passengerSchema)
};