const express = require('express')
require('dotenv').config()
const cors = require("cors");

const app = express()
const port = process.env.PORT

const testimonialsRouter = require('./routes/testimonials')
const galleryRouter = require('./routes/gallery')

const corsOptions = {
    origin: '*', 
    credentials: true,           
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.listen(port, () => {
    console.log('listening at port', port)
})

app.use('/testimonials', testimonialsRouter)
app.use('/gallery', galleryRouter)