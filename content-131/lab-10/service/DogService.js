const dogRepository = require("../repository/DogRepository");
const uuid = require("uuid");


module.exports.getAllDogs = () => {
    let dogsList = dogRepository.readJSONFile();
    return dogsList;
}

module.exports.addDog = (newDog) => {
    //imi aduc un array cu toti cainii deja existenti
  const dogsList = dogRepository.readJSONFile();
  //imi creez cainele nou cu datele venite din frontend pe body-ul requestului
  newDog.id = uuid.v4.apply();

  //adaugam noul caine in lista cainilor existenti
  dogsList.push(newDog);
  //scriu noua lista de caini in db.json
  dogRepository.writeJSONFile(dogsList);

  return newDog;
}

module.exports.getDogById = (id) => {
  const dogsList = dogRepository.readJSONFile();
  let foundDog = null
  dogsList.forEach(dog => {
      if(dog.id === id) {
          foundDog = dog;
      }
  });

  return foundDog;
}

module.exports.updateDog = (id, newDog) => {
  const dogsList = dogRepository.readJSONFile();
  //iteram prin toti cainii si il cautam dupa id
  for(let i = 0; i < dogsList.length; i++) {
      if(dogsList[i].id === id) {
        //actualizam datele cainelui
        if(newDog.name) {
            dogsList[i].name = newDog.name;
        }

        if(newDog.img) {
            dogsList[i].img = newDog.img;
        }
        
        
        //daca am gasit cainele si l-am actualizat, trebuie sa rescriem fisierul db.json
        dogRepository.writeJSONFile(dogsList);
        return dogsList[i];
      }
  }
  return null;
}

module.exports.deleteDog = (id) => {
  const dogsList = dogRepository.readJSONFile();
  for(let i = 0; i < dogsList.length; i++) {
      if(dogsList[i].id === id) {
          //sterg cainele de pe pozitia i
          //splice sterge de la indexul i atatea elemente cate indica al doilea argument
          dogsList.splice(i, 1);
          dogRepository.writeJSONFile(dogsList)
          return true;
      }
  }

  return false;
}

module.exports.getDogsByColor = (color) => {
  const dogsList = dogRepository.readJSONFile();
  let dogsToReturn = [];
  if(color == "" || color == null || color == undefined) {
    return dogsList;
  }

  for(let i = 0; i < dogsList.length; i++) {
    if(dogsList[i].colors.includes(color)) {
      dogsToReturn.push(dogsList[i]);
    }
  }

  return dogsToReturn;
}