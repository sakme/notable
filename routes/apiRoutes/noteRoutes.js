const router = require('express').Router();
// const { filterByQuery } = require('../../lib/notes');
const db = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const { nanoid } = require('nanoid');


// receive get using queries
router.get('/notes', (req, res) => {
    let results = db;

    res.json(results);
});

// receive get using params
router.delete('/notes/:id', (req, res) => {
    const index = db.findIndex((element) => element.id === req.params.id);
    
    if (index >= 0) {
        db.splice(index, 1);
    
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify(db, null, 2)
        );
        
    } else {
        console.log('Record not found!');
    }

    res.json(index);
});

// receive post data
router.post('/notes', (req,res) => {

    req.body.id = nanoid();

    // add note to json file and notes array
    db.push(req.body);
    
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db, null, 2)
    );

    res.json(req.body);
    
    return(db);
});

module.exports = router;