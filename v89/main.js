const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public")) // Middleware to parse JSON bodies

// app.get('/', (req, res) => {
//     console.log("GET request received")
//   res.send('Hello World Get!')
// })


app.post('/', (req, res) => {
    console.log("POST request received")
  res.send('Hello World Post!')
})

app.put('/', (req, res) => {
    console.log("Put request received")
  res.send('Hello World Put!')
})


app.get('/server', (req, res) => {
    console.log("Hey its server")
  res.sendFile('Templates/server.html', {root: __dirname})
})


app.get('/api', (req, res) => {
    
  res.json({ name: "vinay soniapp.get('/server', (req, res) => {
    console.log("Hey its server")
  res.sendFile('Templates/server.html', {root: __dirname})
})", age: 19, city: "jabalpur" })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})