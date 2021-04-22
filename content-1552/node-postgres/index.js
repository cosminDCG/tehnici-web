var express = require('express');
var app = express();

var path = require('path');
const bodyParser = require("body-parser");
var cors = require('cors');

app.use(cors())
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
app.use(require('./controller/CarController'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../views/scripts')))


var server = app.listen(8080, async() => {
    console.log('App is listening on port: 8080!');
});