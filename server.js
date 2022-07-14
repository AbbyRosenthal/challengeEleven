const express = require('express');
const PORT = process.env.PORT || 3001;
const notes = require('./db/db.json');
const fs = require('fs');
const path = require('path');

const app = express();

//parse incoming string or array data
app.use(express.urlencoded({extended: true}));
//parse incoming json data
app.use(express.json());
app.use(express.static('public'));

function createNewTask( body, notesArray) {
    const newTask = body;
    console.log(newTask);
    //put functions main code here
    //determines if vaue is an array
    // if it is not an array
if(!Array.isArray(notesArray))
notesArray = [];

//if the array is empty
if(notesArray.length === 0)
notesArray.push(0);

newTask.id = notesArray[0];
notesArray[0]++;

notesArray.push(newNote);
fs.writeFileSync(
    //writing our notes in the subdirectory
    path.join(__dirname, './db/db.json'),
    //saves as JSON (null and 2 keep data formatted -  per this weeks mdoules)
    JSON.stringify(notesArray, null, 2)
);
    //return finished code to post route for response
    return newTask;
};


//working
app.get('/api/notes', (req, res) => {
    let results = notes;
    res.send(results);
});

//listens for post requests
app.post('/api/notes', (req, res) => {
    //req.body is where incoming content will be
    console.log(req.body);
    res.json(req.body);

    //add animal to json file
});

// '/' brings us to the root of the server
//connects index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//connects notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}`);
  });