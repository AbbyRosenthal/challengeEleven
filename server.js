const express = require('express')
const notes = require('./db/db.json')

const app = express();


//WORKING!!!!
app.get('/api/notes', (req, res) => {
    res.send('Hello World');
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });