const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        data: {
            videos: [
                {
                    id: 0,
                    url: "https://www.youtube.com/embed/kZpIuG4n7Hk"
                },
                {
                    id: 1,
                    url: "https://www.youtube.com/embed/nx9_bqxZjRs"
                },
                {
                    id: 2,
                    url: "https://www.youtube.com/embed/-arh-e3fLnY"
                }
            ]
        }
    })
})

module.exports = router;