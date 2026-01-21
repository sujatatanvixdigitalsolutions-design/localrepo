import dotenv from "dotenv"
dotenv.config();
import express from "express";

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please Login At Nodejs</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Open Youtube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
