const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dataController = require('./routes/data');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// cors
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api', dataController);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));