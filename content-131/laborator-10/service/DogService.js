const uuid = require("uuid");

let dogRepository = require("../repository/DogRepository");

module.exports.getAllDogs = () => {
    const dogsList = dogRepository.readJSONFile();
    return dogsList;
}

module.exports.addDog = (newDog) => {
    //aduc un arry cu toti cainii deja existenti in db.json
    const dogsList = dogRepository.readJSONFile();
    //creez un caine nou folosind datele venite din frontend pe body
    newDog.id = uuid.v4.apply();

    //introducem cainele nou in lista tuturor cainilor
    dogsList.push(newDog)
    //suprascriu db.json cu noua lista de caini
    dogRepository.writeJSONFile(dogsList);

    return newDog;
}