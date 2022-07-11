const express = require('express')
const PORT = process.env.PORT || 3002
const notes = require('./db/db.json')

const app = express();


//working
app.get('/api/notes', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}`);
  });