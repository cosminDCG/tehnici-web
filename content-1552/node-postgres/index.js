var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var path = require('path');
app.use(bodyParser.json());
app.use(cors());

app.use(require('./controller/CarController'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../views/scripts')))


var server = app.listen(8080, async() => {
    console.log('App is listening on port: 8080!');
});