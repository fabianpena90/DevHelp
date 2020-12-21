const express = require('express')
const router = express.Router()

// GET api/auth/
// Test route
// Public
router.get('/', (req, res) => {
    res.send('User Route')
})

module.exports = router