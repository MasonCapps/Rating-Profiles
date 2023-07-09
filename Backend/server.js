const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
require("dotenv").config();

app.get('/', (req, res) => {
  res.send('Hello World!')
})


mongoose.connect(`mongodb+srv://${process.env.ADMIN_ID}@ratingprofilesapi.qerbcar.mongodb.net/Rating-Profiles-API?retryWrites=true&w=majority`).then(() => {
  console.log('connected to MongoDB')
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
}).catch(() => {
  console.log
})