const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const queryText = `
        SELECT * FROM feedback ORDER BY id;
    `
    pool.query(queryText)
        .then(response => {
            console.log('GET response from DB: ', response.rows);
            res.send(response.rows);
        }).catch(err => {
            console.log('Error on query from db: ', err);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    const submission = req.body;
    console.log('submission is: ', submission);
    
    const queryText = `
        INSERT INTO feedback (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4);
    `
    const values = [submission.feeling, submission.understanding, submission.support, submission.comments]
    pool.query(queryText, values)
        .then(response => {
            console.log('POSTED TO DB');
            res.sendStatus(200)
       }).catch(err => {
           console.log('Error posting to DB: ', err);
           res.sendStatus(500);
       })
})

module.exports = router;