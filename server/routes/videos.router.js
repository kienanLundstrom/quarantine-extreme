const router = require('express').Router();
const pool = require('../modules/pool');



router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "videos"';
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500)
        console.log('error in get all videos router', error)
    })
}); 



module.exports = router;