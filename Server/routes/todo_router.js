const express = require('express');
const router = express.Router();

// const pool = require('../modules/pool');

const pg = require('pg');

// pg configuration LOCAL ONLY
const Pool = pg.Pool;
const pool = new Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432
});

pool.on('connect', () => {
    // console log in terminal 
    console.log('connected to postgres');
});

pool.on('error', (error) => {
    // console log in terminal if error
    console.log('error connecting to postgres', error);
});

// GET all notes
router.get('/', (req, res) => {
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


module.exports = router;