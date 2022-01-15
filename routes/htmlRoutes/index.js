const path = require('path');
const router = require('express').Router();

// serve up index.html
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// serve up notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// serve up index.html for wild cards
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;