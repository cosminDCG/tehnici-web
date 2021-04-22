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