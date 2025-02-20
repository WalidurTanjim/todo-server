require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express());

app.get('/', (req, res) => {
    res.send('ToDo server is running.');
})

app.listen(port, () => {
    console.log('ToDo server is running with the port:', port);
})