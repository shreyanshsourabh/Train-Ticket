//npm install mongoose
// docker run -d -p 27017:27017 --name mongo mongo:latest

const mongoose = require('mongoose');

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

module.exports = {
    Booking: mongoose.model('Booking', bookingSchema)
};