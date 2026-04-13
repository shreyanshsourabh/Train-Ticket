//npm install mongoose
// docker run -d -p 27017:27017 --name mongo mongo:latest

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId : {type: String, required: true, unique: true},
    userType: {type: String, required: true, enum: ['admin', 'customer'], default: 'customer'},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    contact: {type: String, required: true}
});


module.exports = {
    User: mongoose.model('User', userSchema)
};