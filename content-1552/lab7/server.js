var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var title = "Dynamic title";
    var cars = [
        {
            brand: "Vw",
            model: "Golf",
            year: 2011,
            image: "https://www.romania-insider.com/sites/default/files/2019-07/spark_car_in_bucharest_-_photo_spark_romania_on_fb.jpg"
        },
        {
            brand: "BMW",
            model: "aaa",
            year: 2012,
            image: "https://www.romania-insider.com/sites/default/files/2019-07/spark_car_in_bucharest_-_photo_spark_romania_on_fb.jpg"
        },
        {
            brand: "Dacia",
            model: "bbb",
            year: 2013,
            image: "https://www.romania-insider.com/sites/default/files/2019-07/spark_car_in_bucharest_-_photo_spark_romania_on_fb.jpg"
        }
    ]
    res.render('pages/index', {
        title: title,
        cars: cars
    });
})

app.get('/gallery', function(req, res) {
    res.render('pages/gallery');
})

var server = app.listen(8080, async() => {
    console.log('App is listening on port: 8080!');
});