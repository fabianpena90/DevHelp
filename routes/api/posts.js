const express = require('express')
const router = express.Router()

// GET api/posts/
// Test route
// Public
router.get('/', (req, res) => {
    res.send('Posts Route')
})

module.exports = router