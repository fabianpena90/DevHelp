const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator/check')
const User = require('../../models/User')

// POST api/users/
// Test route
// Public
router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required, 6 or more Characters').isLength()
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    const { name, email, password } = req.body

    try{
        let user = User.findOne({ email })
    
        if(user) {
            return res.status(400).json({errors: [{ msg: 'User already exists!' }]})
        }

        const avatar = gravatar.url(email, { 
            s: '200',
            r: 'pg',
            d: 'mm'
        })

        user = new User({ 
            name,
            email,
            avatar,
            password
        })

        const salt = await bcrypt.genSalt(10);
        
        user.password = await bcrypt.hash(password, salt)

        await user.save()

        res.send('User registered')

    } catch(err) {
        console.error(err.message)
        res.status(500).json({
            message: "Server Error"
        })
    }

    res.send("User route")
})

module.exports = router