import mongoose from "mongoose";
import express from "express";
import { tudo } from "./model/tudo.js";

let connection = await mongoose.connect("mongodb://localhost:27017/tudo")


const app = express()
const port = 3000

app.get('/', (req, res) => {
    const tudo = new Tudo({
        title: "first tudo",
        desc: "this is the first tudo",
        isDone: false
    })
   tudo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
