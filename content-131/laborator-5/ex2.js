var filmFavorit = {
    titlu: "La moara cu noroc",
    durata: 130,
    actori: ["Constantin Codrescu", "Olga Tudorache", "Geo Barton"]
}

function showMovie(film) {
    console.log('"' + film.titlu + '"' + " a durat " + film.durata + " minute. Actori: " + film.actori);
}

showMovie(filmFavorit);