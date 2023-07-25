const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const User = require('./models/userModel')
require("dotenv").config();

app.use(express.json())

/// Routes
app.get('/', (req, res) => {
  res.send('Home Page')
});

app.get('/users', async(req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.get('/users/:id', async(req, res) => {
  try {
    const {id} = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

app.post('/users', async(req, res) => {
  console.log("posting")
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

app.put('/users/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({message: `No user found with ID ${id}`});
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

app.delete('/users/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id)
    if (!user) {
      res.status(404).json({message: `No user found with ID ${id}`})
    };
    res.status(200).json({message: "User successfully deleted"})
  } catch (error) {
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