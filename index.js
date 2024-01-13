const express = require('express');
const app = express();
const path = require('path');

/* ------------- public folder ---------------- */
app.use(express.static(__dirname + '/public'));
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

app.get('/staff', (req, res) => {
    var staffTitle = "Mean Full Stack Staff";
    var staffCount = 15;
    var emps = [
        { name: "Ali Reda", job: "frontend" },
        { name: "Waleed Mohammed", job: "backtend", address: "mansoura" },
        { name: "FAthy Farouk", job: "AI-dev" },
    ];
    res.render('pages/staff', {
        depName: staffTitle,
        staffCount: staffCount,
        emps: emps
    });
});



/* ---------------- start server --------------- */
port = 3000;
app.listen(port, () => {
    //
    console.log("server start at port " + port);
});