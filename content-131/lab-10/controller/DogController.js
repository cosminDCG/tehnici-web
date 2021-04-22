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

module.exports = router;