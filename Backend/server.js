const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const User = require('./models/userModel')
require("dotenv").config();

app.use(express.json())

/// Routes
app.get('/', (req, res) => {
  res.send('test')
});

app.post('/user', async(req, res) => {
  console.log("posting")
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);

  } catch(error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})


mongoose.connect(`mongodb+srv://${process.env.ADMIN_ID}@ratingprofilesapi.qerbcar.mongodb.net/Rating-Profiles-API?retryWrites=true&w=majority`).then(() => {
  console.log('connected to MongoDB')
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
}).catch(() => {
  console.log
})