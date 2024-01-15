const express = require('express');
const webRouter = express.Router();

/* ------------- controllers ------------------- */
const staffController = require('../controllers/staffController');
const {dishController} = require('../controllers/dishController');
/* -------------- route roles ------------------------ */
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
    webRouter.get('/staff', staffController(req, res));
});


webRouter.get('/dishes', async (req, res) => {
    try {
        await dishController(req, res);
    }
    catch (error) {
        throw error;
    }
});

// add more route roles


module.exports = webRouter;