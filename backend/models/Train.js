//npm install mongoose
// docker run -d -p 27017:27017 --name mongo mongo:latest

const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    train_number: {type: String, required: true, unique: true},
    train_name: {type: String, required: true},
    stops: [{type: String, required: true}],
    sleeper_coaches: {type: Number, required: true},
    available_sleeper_seat: {type: Number},
    third_ac_coaches: {type: Number, required: true},
    available_3ac_seat: {type: Number},
    second_ac_coaches: {type: Number, required: true},
    available_2ac_seat: {type: Number},
    first_ac_coaches: {type: Number, required: true},
    available_1ac_seat: {type: Number}
});

module.exports = {
    Train: mongoose.model('Train', trainSchema),
};