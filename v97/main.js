const express = require('express')
const app = express()

const mongoose = require('mongoose');
const Employee = require("./models/Employee")

mongoose.connect('mongodb://127.0.0.1:27017/companys');
const port = 3000

app.set('view engine', 'ejs')
const getRandom = (arr) => {
    let rNo = Math.floor(Math.random() * (arr.length - 1))
    return arr[rNo]
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/generate', async (req, res) => {
    await Employee.deleteMany({})

    let randomName = ["vinay", "Deepak", "Kuldeep", "Manoj"]
    let randomlang = ["c++", "JAVA", "Python", "JS"]
    let randomCity = ["Jabalpur", "Bhopal", "Katni", "Rewa"]


    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomName),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomlang),
            city: getRandom(randomCity),
            isManager: Math.random() > 0 ? true : false
        })
        // await e.save()
    }
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
