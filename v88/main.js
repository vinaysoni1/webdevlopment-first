const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/About', (req, res) => {
  res.send('Hello About us')
})

app.get('/Contact', (req, res) => {
  res.send('Contact me')
})

app.get('/Home', (req, res) => {
  res.send('Home Page')
})

// app.get('/Home/Intro to java', (req, res) => {
//   res.send('hey This is java')
// })

// app.get('/Home/Intro to python', (req, res) => {
//   res.send('hey This is python')
// })

// app.get('/Blog/:slug/:second', (req, res) => {
//   res.send(`My name is : ${req.params.slug} and Age: ${req.params.second}`)
// })



app.get('/Blog/:slug', (req, res) => {
      console.log(req.params)  //hey This is java
      console.log(query.params) //  hey This is java
      
  res.send(`My name is : ${req.params.slug}`)

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})