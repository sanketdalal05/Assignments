const express = require('express');
const event = new Date();
const app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/time', function (req, res) {
    res.send(`time is :- ${event.toISOString()}`);
});
app.listen(process.env.port || 7080);