const express = require('express');
const mongoose = require('mongoose');
const {User, Passenger, Booking, Train} = require('./models/db');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/train_ticket_booking')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req,res) =>{
    res.send('<p>Hello</p>');
});

app.post('/register', async(req,res) =>{
    try{
        const {userId, userType, name, email, password, contact} = req.body;

        if(!userId || !userType || !name || !email || !password || !contact){
            return res.status(400).json({error: 'All fields are required'});
        }

        const user = await User.create({userId, userType, name, email, password, contact});
        res.status(201).json({message: 'User registered successfully', user});
    } catch(err){
        res.status(500).json({error: 'Failed to register user', details: err.message});
    }
})

app.get('/login', async(req,res) =>{
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user){ return res.status(404).json({error: 'User not found'}); }
        if(user.password !== password){ return res.status(404).json({error: 'Invalid password'}); }
        
        res.json({message: 'Login successful', user});
    }catch(err){
        res.status(500).json({error: 'Failed to login', details: err.message});
    }
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})