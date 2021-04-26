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
    let newCar = req.body;
    let cars = await carService.insertNewCar(newCar);
    res.status(200).send(newCar);
})

router.get('/car/:id', async function(req, res) {
    let id = req.params.id;
    let car = await carService.getCarById(id);
    res.status(200).send(car);
})

router.put('/car/:id', async function(req, res) {
    let id = req.params.id;
    let updatedCar = req.body;
    await carService.updateCar(updatedCar, id);
    res.status(200).send(updatedCar);
})

router.delete('/car/:id', async function(req, res) {
    let id = req.params.id;
    await carService.deleteCar(id);
    res.status(200).send("Car deleted!");
})

router.get('/car/brand/:brand', async function(req, res) {
    let brand = req.params.brand;
    let cars = await carService.getCarByBrand(brand);
    res.status(200).send(cars);
})

module.exports = router;