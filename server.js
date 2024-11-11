// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const path = require('path');

dotenv.config();
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


// app.use(express.static(path.resolve(_dirname, "auth-frontend", "dist")));
// app.use(express.json());
// app.use(express.static('public'))
// app.use('/images',express.static("images"))

// app.get("*",(req, res) => {
//     res.sendFile(path.resolve(_dirname,"auth-frontend","dist","index.html"));
// })

// Use the auth routes
app.use('/api/auth', authRoutes);

app.get("/",(req,res)=>
  {
      app.use(express.static(path.resolve(__dirname,"frontend","dist")));
      res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
  })

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});