const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let SiteName = "iPhone"
    let Text ="Search Now"
    let arr = [1,2,3,4,5]
  res.render("index", { SiteName: SiteName, Text: Text,arr: arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "My site Why and When?"
    let BlogContent ="It is a good Brand"
  res.render("BlogPost", { blogTitle: blogTitle, BlogContent: BlogContent })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})