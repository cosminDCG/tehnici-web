// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

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
  let id = req.params.id;
  let checkIfDogExists = false;
  dogsList.forEach(dog => {
      if(dog.id === id) {
          checkIfDogExists = true;
          res.status(200).send(dog);
      }
  })

  if(checkIfDogExists === false) {
      res.status(404).send("No dog found!");
  }
});

// Update
app.put("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  //iau id-ul cainelui pe care verau sa il actualizez
  let id = req.params.id;
  //flag daca exista cainele
  let checkIfDogExists = false;
  for(let i = 0; i < dogsList.length; i++) {
      if(dogsList[i].id === id) {
          //in cazul in care cainele este gasit, ii actualizam datele
          if(req.body.name) {
            dogsList[i].name = req.body.name;
          }

          if(req.body.img) {
            dogsList[i].img = req.body.img;
          }
          
          checkIfDogExists = true;
          break;
      }
  }

  if(checkIfDogExists === true) {
      //rescriem db.json cu datele cainelui actualizate;
      writeJSONFile(dogsList);
      res.status(200).send("Dog successfully updated!");
  } else {
      //trimitem exception 404 not found
      res.status(404).send("No dog found!")
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
          //sterg cinele de pe pozitia i
          // splice sterge de la indexul i atatea elemente cate indica al doilea argument
          dogsList.splice(i, 1);
          break
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