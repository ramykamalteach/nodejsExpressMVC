const express = require('express');
const app = express();
const path = require('path');

/* ------------- view engine ------------------ */
app.set('view engine', 'ejs');
/* -------------- page ------------------------ */
app.get('/', (req, res) => {
    res.render('pages/home');
});
app.get('/about', (req, res) => {
    res.render('pages/about');
});
app.get('/contacts', (req, res) => {
    res.render('pages/contacts');
});

port = 3000;
app.listen(port, () => {
    //
    console.log("server start at port " + port);
});