const express = require('express')
const blog = require('./router/blog')
const shop = require('./router/shop')


const app = express()
const port = 3000

app.use(express.static("public")) // Middleware to parse JSON bodies
app.use('/blog', blog)
app.use('/shop', shop)
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
  res.sendFile('Templates/server.html', { root: __dirname })
})


app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})