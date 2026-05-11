import mongoose from "mongoose";
import express from "express";
import { Testest} from "./model/test.js";


let conn = await mongoose.connect("mongodb://127.0.0.1:27017/test")

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const test = new Test({ title: "hey first test", desc: "Description of the test", isDone: false })
  test.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
