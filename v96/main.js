import mongoose from "mongoose";
import express from "express";
import { Test} from "./model/test.js";


let conn = await mongoose.connect("mongodb://127.0.0.1:27017/test")

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const test = new Test({ desc: "Description of the test", isDone: false ,Days:10})
  test.save()
  res.send('Hello World!')
})

app.get('/a', async(req, res) => {
  let test = await Test.findOne({})
  console.log(test)
 
  res.json({title:"test.title",decs : "test.desc"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
