const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("welcome to our Home page");
});
app.get('/about', (req, res) => {
    res.send("About our Company");
});

port = 3000;
app.listen(port, () => {
    //
    console.log("server start at port " + port);
});