// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const uuid = require("uuid");

// Aplicatia
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./controller/DogController'));

// Read One
app.get("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  //ne luam id-ul pe care il cautam
  let id = req.params.id;
  let checkIfDogExists = false;
  dogsList.forEach(dog => {
      if(dog.id === id) {
          checkIfDogExists = true;
          res.status(200).send(dog);
      }
  });

  if(checkIfDogExists === false) {
      res.status(404).send("Dog not found!");
  }
});

// Update
app.put("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  //iau id-ul cainelui pe care vreau sa il actualizez
  let id = req.params.id;
  //flag daca exista cainele
  let checkIfDogExists = false;
  //iteram prin toti cainii si il cautam dupa id
  for(let i = 0; i < dogsList.length; i++) {
      if(dogsList[i].id === id) {
          //actualizam datele cainelui
          if(req.body.name) {
            dogsList[i].name = req.body.name;
          }

          if(req.body.img) {
            dogsList[i].img = req.body.img;
          }
          
          checkIfDogExists = true;
          //opresc forul pentru ca deja am gasit si actualizat cainele
          break;
      }
  }

  if(checkIfDogExists === true) {
      //daca am gasit cainele si l-am actualizat, trebuie sa rescriem fisierul db.json
      writeJSONFile(dogsList);
      res.status(200).send("Dog updated!");
  } else {
      res.status(404).send("Dog not found!");
  }
});

// Delete
app.delete("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  let id = req.params.id;
  let checkIfDogExists = false;
  for(let i = 0; i < dogsList.length; i++) {
      if(dogsList[i].id === id) {
          checkIfDogExists = true;
          //sterg cainele de pe pozitia i
          //splice sterge de la indexul i atatea elemente cate indica al doilea argument
          dogsList.splice(i, 1);
          break;
      }
  }

  if(checkIfDogExists === true) {
      writeJSONFile(dogsList);
      res.status(200).send("Dog deleted!");
  } else {
      res.status(404).send("Dog not found!");
  }
});

// Pornim server-ul
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);