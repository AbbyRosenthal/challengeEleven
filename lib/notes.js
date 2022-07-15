const path = require('path');
const fs = require('fs');

function createNewTask(body, notesArray) {
    const newTask = body;
    console.log(newTask);

notesArray.push(newTask);
fs.writeFileSync(
    //writing our notes in the subdirectory
    path.join(__dirname, '../db/db.json'),
    //saves as JSON (null and 2 keep data formatted -  per this weeks mdoules)
    JSON.stringify(notesArray, null, 2)
);
    //return finished code to post route for response
    return newTask;
};

function deleteTask(id, notesArray) {
    let deleteId = id;
    for (let i = 0; i < notesArray.length; i++) {
        if (deleteId === notesArray[i].id) {
            notesArray.splice(i, 1)
            fs.writeFileSync(
                //writing our notes in the subdirectory
                path.join(__dirname, '../db/db.json'),
                //saves as JSON (null and 2 keep data formatted -  per this weeks mdoules)
                JSON.stringify(notesArray, null, 2))
        }
    }
}

module.exports = {createNewTask, deleteTask};




