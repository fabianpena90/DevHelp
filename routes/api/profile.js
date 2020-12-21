const express = require('express')
const router = express.Router()

// GET api/profile/
// Test route
// Public
router.get('/', (req, res) => {
    res.send('Profile Route')
})

module.exports = router