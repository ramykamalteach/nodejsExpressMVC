const express = require('express');
const webRouter = express.Router();

/* -------------- page ------------------------ */
webRouter.get('/', (req, res) => {
    res.render('pages/home');
});
webRouter.get('/about', (req, res) => {
    res.render('pages/about');
});
webRouter.get('/contacts', (req, res) => {
    res.render('pages/contacts');
});

webRouter.get('/staff', (req, res) => {
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

// add more route roles


module.exports = webRouter;