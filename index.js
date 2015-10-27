'use strict';

var
    app = require('express')(),
    fs = require('fs'),
    path = require('path')
    ;

var config = {
    port: process.env.PORT || 7007
};

app.get('/', function(req, res) {
    console.log(new Date());
    fs.readFile(path.resolve('./index.html'), {}, function(err, content) {

    });
    res.sendFile(path.resolve('./index.html'))
});

app.use('/examples/browser', express.static('./examples/browser'));

app.listen(config.port, function() {
    console.log('Running on port: ' + config.port)
});