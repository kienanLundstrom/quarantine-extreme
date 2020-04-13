const router = require('express').Router();
const pool = require('../modules/pool');

router.get(`/`, (req, res) => { 
    const SQLquery = `SELECT "youtubeID" FROM videos;`;
    pool.query(SQLquery)
    .then((result)=>{
        res.send(result.rows);
    })
    .catch((error)=>{
        console.log('ERROR GETTING VIDEO ------------------->', error);
        res.sendStatus(500);
    });
});



module.exports = router;