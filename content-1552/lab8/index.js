var express = require('express');
var app = express();

const { Client } = require('pg')
const client = new Client()

app.get('/', async function(req, res) {
    
})

var server = app.listen(8080, async() => {
    console.log(process.env.USER);
    console.log('App is listening on port: 8080!');
});