const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        data: {
            testimonials: [
                {
                    id: 0,
                    text: "I'm indeed getting an error, When I include both the libraries my combined JS file starts with jQuery and slick.js comes right after that.. I've also tried adding the library/libraries in the body of the desired page, but that gives the same error.",
                    name: "Shalini Dubey",
                    designation: "(Parent)",
                    imgPath: '',
                },
                {
                    id: 1,
                    text: "I'm indeed getting an error, I include both the libraries my combined JS file starts with jQuery and slick.js comes right after that.. I've also tried adding the library/libraries in the body of the desired page, but that gives the same error.",
                    name: "Ankita Sharma",
                    designation: "(Parent)",
                    imgPath: '',
                }
            ]
        },
        status: 'success'
    })
})

module.exports = router;