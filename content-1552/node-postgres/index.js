var express = require('express');
const { Client } = require('pg');

var app = express();
const client = new Client({
    user: 'cosmin',
    database: 'cars',
    password: 'root',
    port: 5432
});
client.connect();

app.get('/', async function(req, res) {
    let cars = [];
    cars = await (await client.query('SELECT * FROM cars')).rows;
    console.log('Cars outside the query: ', cars);
    res.status(200).send(cars);
})

var server = app.listen(8080, async() => {
    console.log('App is listening on port: 8080!');
});