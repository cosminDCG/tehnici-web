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

module.exports.getDogById = (id) => {
    const dogsList = dogRepository.readJSONFile();
    let foundDog = null;
    dogsList.forEach(dog => {
        if(dog.id === id) {
            foundDog = dog;
        }
    })
    return foundDog;
}

module.exports.getDogByName = (name) => {
    const dogsList = dogRepository.readJSONFile();
    let foundDog = null;
    dogsList.forEach(dog => {
        if(dog.name === name) {
            foundDog = dog;
        }
    })
    return foundDog;
}

module.exports.updateDog = (id, dog) => {
    const dogsList = dogRepository.readJSONFile();
    let updateDog = null;
    for(let i = 0; i < dogsList.length; i++) {
        if(dogsList[i].id === id) {
            //in cazul in care cainele este gasit, ii actualizam datele
            if(dog.name) {
              dogsList[i].name = dog.name;
            }
  
            if(dog.img) {
              dogsList[i].img = dog.img;
            }
            updateDog = dogsList[i];
            break;
        }
    }
    //rescriem db.json cu datele cainelui actualizate;
    dogRepository.writeJSONFile(dogsList);
    return updateDog;
}

module.exports.deleteDog = (id) => {
    const dogsList = dogRepository.readJSONFile();
    let checkIfDogExists = false;
    for(let i = 0; i < dogsList.length; i++) {
        if(dogsList[i].id === id) {
            checkIfDogExists = true;
            //sterg cinele de pe pozitia i
            // splice sterge de la indexul i atatea elemente cate indica al doilea argument
            dogsList.splice(i, 1);
            break;
        }
    }
    dogRepository.writeJSONFile(dogsList);
    return checkIfDogExists;
}

module.exports.getDogsByColor = (color) => {
    const dogsList = dogRepository.readJSONFile();
    if(color == "" || color == null || color == undefined) {
        return dogsList;
    }
    console.log(color);
    let dogsToReturn = [];
    for(let i = 0; i < dogsList.length; i++) {
        if(dogsList[i].colors.includes(color)) {
            dogsToReturn.push(dogsList[i]);
        }
    }
    return dogsToReturn;
}