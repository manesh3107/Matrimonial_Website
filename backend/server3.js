const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require("body-parser");
const person = require('./personModel');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

let loggedInUser = null;

mongoose.connect("mongodb://127.0.0.1:27017/vivah");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // ... (Your existing code for uploading a user)
  } catch (error) {
    console.error('Error creating user', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/user', async (req, res) => {
  try {
    let users;

    if (loggedInUser) {
      users = await person.find({ _id: { $ne: loggedInUser._id } });
    } else {
      users = await person.find();
    }

    // Convert the binary image data to Base64 for each user
    const usersWithBase64Image = users.map(user => ({
      ...user.toObject(),
      image: user.image.toString('base64'),
    }));

    res.status(200).json(usersWithBase64Image);
  } catch (error) {
    console.error('Error retrieving users', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email and password (you should enhance this for security)
    const user = await person.findOne({ email, password });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    loggedInUser = user;

    // Send the user details
    res.status(200).json(user);

  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/user/profile", (req, res) => {
  if (!loggedInUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userWithBase64Image = {
    ...loggedInUser.toObject(),
    image: loggedInUser.image.toString('base64'),
  };

  res.status(200).json(userWithBase64Image);
});

app.post("/user/logout", (req, res) => {
  loggedInUser = null;

  res.status(200).json({ message: "Logged out successfully" });
});

app.post("/add-to-wishlist/:userId", async (req, res) => {
  try {
    // ... (Your code for adding a person to the wishlist)
  } catch (error) {
    console.error("Error adding person to wishlist", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
