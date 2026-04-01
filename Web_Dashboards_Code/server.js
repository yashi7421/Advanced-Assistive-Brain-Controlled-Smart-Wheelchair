const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/profileDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const ProfileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  mobile: String,
  email: String,
  address: String,
});

const Profile = mongoose.model("Profile", ProfileSchema);

// Route to add new profile
app.post("/add-profile", async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.json({ message: "Profile added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to add profile", error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
