const router = require('express').Router();
const {notes} = require('../db/db.json');

const {v4:uuidv4} = require('uuid');
const { createNewTask, deleteTask } = require('../lib/notes');

//working
router.get('/notes', (req, res) => {
    let results = notes;
    res.send(results);
});

//listens for post requests
router.post('/notes', (req, res) => {
    //req.body is where incoming content will be
    //creates universally unique id
    req.body.id = uuidv4();
    console.log(req.body);
    res.json(createNewTask(req.body, notes));

});

router.delete('/notes/:id', (req, res) => {
    const params = req.params.id
    deleteTask(params, notes);
    res.redirect('');
});

module.exports = router;