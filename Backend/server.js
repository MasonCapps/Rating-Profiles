const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const userRoute = require('./routes/userRoute');
require("dotenv").config();

app.use(express.json());

/// Home Route
app.use('/api', userRoute);

app.get('/', (req, res) => {
  res.send('Home Page')
});


mongoose.connect(`mongodb+srv://${process.env.ADMIN_ID}@ratingprofilesapi.qerbcar.mongodb.net/Rating-Profiles-API?retryWrites=true&w=majority`).then(() => {
  console.log('connected to MongoDB')
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
}).catch(() => {
  console.log
})