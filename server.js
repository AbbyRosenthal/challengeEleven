const express = require('express')
const notes = require('./db/db.json')

const app = express();


//working
app.get('/api/notes', (req, res) => {
    res.send('Hello World');
});

app.listen(3002, () => {
    console.log(`API server now on port 3002!`);
  });