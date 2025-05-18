const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Connect to MongoDB
const conn = require('./db/conn');
conn();

// Routes
const routes = require("./routes/router");
app.use('/api', routes);

// Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
