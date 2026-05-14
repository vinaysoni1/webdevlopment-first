const express = require('express')
const app = express()

const mongoose = require('mongoose');
const Employee = require("./models/Employee")

conn=mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/Generate', async(req, res) => {
    for (let index = 0; index< 10; i++) {
        let e = await Employee.create({
            name: "Harry",
            salary: 45000000,
            language: "Python",
            city: "New York",
            isManager: true
        })
        console.log(e)
    //   await  e.save()
    }
     res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})