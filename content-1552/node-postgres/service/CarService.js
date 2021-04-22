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
    let cars = await carRepository.addCar(car);
    return cars;
}