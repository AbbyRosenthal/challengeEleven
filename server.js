const express = require('express')
const { notes } = require('./public/assets/js/index')

const app = express();


app.get('/api/notes', (req, res) => {
    res.send('Hello World');
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });