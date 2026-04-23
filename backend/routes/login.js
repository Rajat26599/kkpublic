const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    if(req.body.mode === 'email') {
        if(req.body.email === 'kkpublic.skb@gmail.com') {
            if(req.body.password === '123') {
                res.send({
                    data: {
                        mode: req.body.mode,
                        username: 'kkpublic',
                        email: req.body.email,
                        mobile: '',
                        roles: ['admin']
                    },
                    success: true
                })
            } else {
                res.send({
                    success: false,
                    message: 'Invalid password!'
                })
            }
        } else {
            res.send({
                success: false,
                message: 'Invalid email!'
            })
        }
    } else {
        res.send({
            success: false
        })
    }
})

module.exports = router;