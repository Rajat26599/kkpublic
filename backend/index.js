const express = require('express')
require('dotenv').config()
const cors = require("cors");

const app = express()
const port = process.env.PORT

const testimonialsRouter = require('./routes/testimonials')
const galleryRouter = require('./routes/gallery')
const loginRouter = require('./routes/login')
const bodyParser = require('body-parser')

const corsOptions = {
    origin: '*', 
    credentials: true,           
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

// parse application/json
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('listening at port', port)
})

app.use('/testimonials', testimonialsRouter)
app.use('/gallery', galleryRouter)
app.use('/login', loginRouter)