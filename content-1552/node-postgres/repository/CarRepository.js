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