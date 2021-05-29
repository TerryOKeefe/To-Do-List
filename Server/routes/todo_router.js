const express = require('express');
const router = express.Router();
// require pool from modules/pool.js
const pool = require('../modules/pool');

// GET all notes
router.get('/', (req, res) => {
    // variable to tell SQL what to run
    let queryText = 'SELECT * FROM "list" ORDER BY "id" DESC;';

    pool.query(queryText)
    .then( (result) => {
        // sends back the results in an object
        res.send(result.rows);
    })
    .catch( (error) => {
        // console log errors in terminal
        console.log('error getting books', error);
        // send a 500 status 
        res.sendStatus(500);
    });
});

// POST new notes
router.post('/', (req, res) => {
    // sanitize new data coming in
    let queryText = `INSERT INTO "list" ("notes")
    VALUES ($1);`;
    // variable to hold requested input value
    let values = [req.body.notes];

    pool.query(queryText, values)
    .then( (result) => {
        // send a created (201) status
        res.sendStatus(201);
    })
    .catch( (error) => {
        // log in terminal any errors
        console.log('Error posting list', error);
        // send a (500) status
        res.sendStatus(500);
    })
});

// DELETE selected item by id
router.delete('/:id', (req, res) => {
    // this is the id we want to target on click
    const itemToDelete = req.params.id;
    // variable to tell SQL what to run with sanitation
    const queryString = `DELETE FROM "list" WHERE "list".id = $1;`;

    pool.query(queryString, [itemToDelete])
    .then( (response) => {
        // console log the targeted id to show in terminal
        console.log(`We deleted item with id ${itemToDelete}`);
        // send an OK status (200)
        res.sendStatus(200);
    })
    .catch( (error) => {
        // console log the error
        console.log('Error in deleting item', error);
        // send a 500 status
        res.sendStatus(500);
    });
});

// PUT or UPDATE selected item by id
router.put('/:id', (req, res) => {
    // the requested list id and set to a variable
    const listId = req.params.id;
    // need a way to change false to true
    // set a variable to be the incoming boolean
    let taskDone = req.body.complete;
    // console log to see what came through on req.body.complete
    console.log('The boolean sent over:', taskDone);
    // set a variable to change boolean in conditional
    let queryBoolean;
    // conditional to run when Mark Completed is clicked
    if (taskDone === "true") {
        queryBoolean = `UPDATE "list" SET "isDone"=true WHERE "list".id = $1;`;
    } else {
        // send an error (500) status
        res.sendStatus(500);
        // early exit for error
        return;
    }

    // take in the two parameters to query
    pool.query(queryBoolean, [listId])
    .then( (response) => {
        // console log the rowCount
        console.log(response.rowCount);
        // send a good status (202) accepted
        res.sendStatus(202);
    }).catch( (error) => {
        // console log the error
        console.log('Task did not get marked true.', error);
        // send back a (500) status
        res.sendStatus(500);
    });
});


module.exports = router;