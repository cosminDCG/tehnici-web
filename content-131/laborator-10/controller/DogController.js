var express = require('express');
var router = express.Router();

let dogService = require("../service/DogService");

// Read All
router.get("/dogs", (req, res) => {
    let dogsList = dogService.getAllDogs()
    if(dogsList != undefined && dogsList.length != 0) {
        res.status(200).send(dogsList);
    } else {
        res.status(404).send("No dogs found!");
    }
});

// Create
router.post("/dogs", (req, res) => {
    let newDog = dogService.addDog(req.body);
    //trimit raspuns catre frontend ca totul a fost ok
    res.status(200).send(newDog);
});

// Read One
router.get("/dogs/:id", (req, res) => {
    let id = req.params.id;
    let dog = dogService.getDogById(id)
    if(dog === null) {
        res.status(404).send("No dog found!");
    } else {
        res.status(200).send(dog);
    }
});

router.get("/dogs/name/:name", (req, res) => {
    let name = req.params.name;
    let dog = dogService.getDogByName(name);
    if(dog === null) {
        res.status(404).send("No dog found!");
    } else {
        res.status(200).send(dog);
    }
})

router.get("/dogs/filter/property", (req, res) => {
    let color = req.query.color;
    let dogs = dogService.getDogsByColor(color);
    if(dogs.length) {
        res.status(200).send(dogs);
    } else {
        res.status(404).send("Dogs not found!");
    }
})

// Update
router.put("/dogs/:id", (req, res) => {
    //iau id-ul cainelui pe care verau sa il actualizez
    let id = req.params.id;
    let dog = dogService.updateDog(id, req.body);
    if(dog !== null) {
        res.status(200).send(dog);
    } else {
        //trimitem exception 404 not found
        res.status(404).send("No dog found!");
    }
});

// Delete
router.delete("/dogs/:id", (req, res) => {
    let id = req.params.id;
    let deleteFlag = dogService.deleteDog(id);
    if(deleteFlag === true) {
        res.status(200).send("Dog deleted!");
    } else {
        res.status(404).send("Dog not found!");
    }
});

module.exports = router;