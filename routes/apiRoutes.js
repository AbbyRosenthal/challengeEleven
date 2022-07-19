const router = require('express').Router();
const notes = require('../db/db.json');

const {v4:uuidv4} = require('uuid');
const { createNewTask, deleteTask } = require('../lib/notes');
//spread operator
let notesCopy = notes.splice();

//working
router.get('/notes', (req, res) => {
    let results = notesCopy;
    res.send(results);
});

//listens for post requests
router.post('/notes', (req, res) => {

    //req.body is where incoming content will be
    //creates universally unique id
    req.body.id = uuidv4();
    console.log(req.body);
    res.json(createNewTask(req.body, notesCopy));

});

router.delete('/notes/:id', (req, res) => {
    const params = req.params.id
    deleteTask(params, notesCopy);
    res.redirect('');
});

module.exports = router;