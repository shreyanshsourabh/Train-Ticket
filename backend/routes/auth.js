const express = require('express');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');

const router = express.Router();
router.use(express.json());

router.post('/register', async(req,res) =>{
    try{
        const {userType, name, email, password, contact} = req.body;

        if(!userType || !name || !email || !password || !contact){
            return res.status(400).json({error: 'All fields are required'});
        }

        const userId = uuidv4();

        // Check if email already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({error: 'Email already in use'});
        }

        // Hash password and create user
        const hashedpass = await bcrypt.hash(password, 10);
        const user = await User.create({userId, userType, name, email, password: hashedpass, contact});
        
        res.status(201).json({message: 'User registered successfully', user});
    } catch(err){
        res.status(500).json({error: 'Failed to register user', details: err.message});
    }
})

router.post('/login', async(req,res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        // Validate user
        if(!user){ return res.status(404).json({error: 'User not found.\n Click on Register'}); }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){ return res.status(401).json({error: 'Invalid password'}); }

        //Token assignement
        const token = jwt.sign({userId: user._id, userType: user.userType}, process.env.JWT_SECRET || 'your_jwt_secret', {expiresIn: '10m'});
        
        res.status(200).json({message: 'Login successful', user, token});
    }catch(err){
        res.status(500).json({error: 'Failed to login', details: err.message});
    }
});

module.exports = router;