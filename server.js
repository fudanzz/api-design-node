// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var jsonData = {
    count: 12,
    message: 'hey'
};

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html', function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
})


app.get('/', function (req, res) {
    fs.readFile('index.html', function (err, buffer) {
        var html = buffer.toString();
        res.setHeader
        res.send(html);
    })
})
app.get('/data', function (req, res) {
    res.json(jsonData);
})

var port = 3000;
app.listen(port, function () {
    console.log('listening on http://localhost:' + port);
});
