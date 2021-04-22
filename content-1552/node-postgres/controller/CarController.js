var express = require('express');
var router = express.Router();

var carService = require('../service/CarService');

router.get('/', async function(req, res) {
    let cars = await carService.fetchPosts();

    res.render('pages/index', {
        title: 'Postgres cars',
        cars: cars
    });
})

router.get('/gallery', async function(req, res) {
    res.render('pages/gallery');
})

router.post('/add/car', async function(req, res) {
    console.log(req)
    console.log(req.body)
    let newCar = req.body;
    let cars = await carService.insertNewCar(newCar);
    res.render('pages/index', {
        title: 'Postgres cars',
        cars: cars
    });
})

module.exports = router;