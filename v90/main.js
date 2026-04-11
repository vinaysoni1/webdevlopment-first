const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

app.use('/blog', blog)

// app.use(express.static("public"))

// middleware1  //logger  for our appliication 
app.use((req, res, next)=> {
    console.log(req.headers)
    req.vinay =  "I am a vinay soni"
    fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
//   res.send('Hacked by middleware 1')
  next()
})

//middleware2
app.use((req, res, next)=> {
  console.log('M2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact!' +req.vinay)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})