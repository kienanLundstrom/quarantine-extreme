const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const port = process.env.PORT || 5000;

const app = express();
const video = require('./routes/videos.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 // needed for react requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/video', video)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
