/// Get All Users
app.get('/users', async(res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

/// Get Single User
app.get('/users/:id', async(req, res) => {
  try {
    const {id} = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

/// Create User
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

/// Update User
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

/// Delete User
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