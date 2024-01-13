const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send("welcome to our Home page");
});
app.get('/about', (req, res) => {
    res.send("About our Company");
});
app.get('/x', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/contacts.html'));
});

port = 3000;
app.listen(port, () => {
    //
    console.log("server start at port " + port);
});