const { Client } = require('pg');

const client = new Client({
    user: 'cosmin',
    database: 'cars',
    password: 'root',
    port: 5432
});
client.connect();

module.exports.getAllCars = async () => {
    let cars = [];
    cars = await (await client.query('SELECT * FROM cars')).rows;
    return cars;
}

module.exports.addCar = async (car) => {
    let cars = await client.query('INSERT INTO cars(brand, model, year, image) VALUES($1, $2, $3, $4) RETURNING *', [car.brand, car.model, car.year, car.image]);
    return cars;
}

module.exports.getCarById = async(id) => {
    let car = await client.query('SELECT * FROM cars WHERE id = $1', [id]);
    return car.rows[0];
}

module.exports.updateCar = async(car, id) => {
    await client.query('UPDATE cars SET brand = $1, model = $2, year = $3, image = $4 WHERE id = $5', [car.brand, car.model, car.year, car.image, id]);
}

module.exports.deleteCar = async(id) => {
    await client.query('DELETE FROM cars WHERE id = $1', [id]);
}

module.exports.getCarByBrand = async(brand) => {
    let cars = await client.query('SELECT * FROM cars WHERE brand = $1', [brand]);
    return cars.rows;
}