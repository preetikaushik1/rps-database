const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserPage = require('./pages/studentsdata')

const app = express()

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/rps_school-db')



app.get('/studentsdata', (req, res) => {
    UserPage.find()
        .then(studentsdata => res.json(studentsdata))
        .catch(err => res.json(err))
})

app.listen(9898)