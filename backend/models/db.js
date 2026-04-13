//npm install mongoose
// docker run -d -p 27017:27017 --name mongo mongo:latest

const mongoose = require('mongoose');
const { use } = require('react');

const userSchema = new mongoose.Schema({
    userId : {type: String, required: true, unique: true},
    userType: {type: String, required: true, enum: ['admin', 'customer'], default: 'customer'},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    contact: {type: String, required: true}
});

const passengerSchema = new mongoose.Schema({
    passengerId: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    birth_preference: {type: String, required: true, enum: ['window', 'aisle', 'middle', 'No Preference'], default: 'No Preference' }
});

const bookingSchema = new mongoose.Schema({
    bookingId: {type: String, required: true, unique: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    passengerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Passenger', required: true},
    train_number: {type: mongoose.Schema.Types.ObjectId, ref: 'Train', required: true},
    departure_date: {type: Date, required: true},
    departure_time: {type: String, required: true},
    departure_station: {type: String, required: true},
    arrival_station: {type: String, required: true},
    seat_number: {type: String, required: true},
    coach_number: {type: String, required: true},
    booking_status: {type: String, required: true, enum: ['confirmed', 'waiting', 'cancelled'], default: 'waiting' }
});

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
    User: mongoose.model('User', userSchema),
    Passenger: mongoose.model('Passenger', passengerSchema),
    Booking: mongoose.model('Booking', bookingSchema),
    Train: mongoose.model('Train', trainSchema),
};