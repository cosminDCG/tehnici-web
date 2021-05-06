var express = require("express");
var router = express.Router();

const dogService = require("../service/DogService");

// Read All
router.get("/dogs", (req, res) => {
    const dogsList = dogService.getAllDogs();
    if(dogsList != undefined && dogsList.length != 0) {
        res.status(200).send(dogsList);
    } else {
        res.status(404).send("No dogs found!");
    }
});

// Create
router.post("/dogs", (req, res) => {
    let newDog = dogService.addDog(req.body);
    //trimit raspuns catre client(frontend) ca totul a fost ok
    res.status(200).send(newDog);
});

// Read One
router.get("/dogs/:id", (req, res) => {
    //ne luam id-ul pe care il cautam
    let id = req.params.id;
    let dog = dogService.getDogById(id);
    console.log(dog);

    if(dog != null && dog != undefined) {
        res.status(200).send(dog);
    } else {
        res.status(404).send("Dog not found!");
    }
});

// Update
router.put("/dogs/:id", (req, res) => {
    //iau id-ul cainelui pe care vreau sa il actualizez
    let id = req.params.id;
    let dog = dogService.updateDog(id, req.body);

    if(dog != null && dog != undefined) {
        res.status(200).send(dog);
    } else {
        res.status(404).send("Dog not found for update!");
    }
});
  
// Delete
router.delete("/dogs/:id", (req, res) => {
    let id = req.params.id;
    let flag = dogService.deleteDog(id);

    if(flag === true) {
        res.status(200).send("Dog deleted!");
    } else {
        res.status(404).send("Dog not found!");
    }
});

router.get("/dogs/filter/property", (req, res) => {
    let color = req.query.color;
    let dogs = dogService.getDogsByColor(color);
    if(dogs.length != 0) {
        res.status(200).send(dogs);
    } else {
        res.status(404).send("No dog found!");
    }
});

module.exports = router;