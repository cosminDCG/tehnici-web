let carRepository = require('../repository/CarRepository');

module.exports.fetchPosts = async () => {
    let cars = await carRepository.getAllCars();
    for(let i = 0; i < cars.length; i++) {
        let date = new Date();
        cars[i].date = date.getUTCDate();
    }

    return cars;
}

module.exports.insertNewCar = async (car) => {
    await carRepository.addCar(car);
    let cars = await carRepository.getAllCars();
    return cars;
}

module.exports.getCarById = async (id) => {
    let car = await carRepository.getCarById(id);
    return car;
}

module.exports.updateCar = async (car, id) => {
    await carRepository.updateCar(car, id);
}

module.exports.deleteCar = async(id) => {
    await carRepository.deleteCar(id);
}

module.exports.getCarByBrand = async (brand) => {
    let cars = await carRepository.getCarByBrand(brand);
    return cars;
}

module.exports.getCarsByName= async (carName) => {
    let cars = await carRepository.getAllCars();
    let carsToReturn = [];
    for(let i = 0; i < cars.length; i++) {
        if(cars[i].brand.toLowerCase().includes(carName) || cars[i].model.toLowerCase().includes(carName)) {
            carsToReturn.push(cars[i]);
        }
    }
    return carsToReturn;
}