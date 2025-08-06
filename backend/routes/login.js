const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send({
        data: {
            username: req.body.username,
            roles: ['admin'],
            password: req.body.password
        },
        status: 'success'
    })
})

module.exports = router;