var express = require('express');
var app     = express();
var port    = 8000;

app.get('/age?', function(req, res) {
    res.send('born in 1996');  
});

app.listen(port);
