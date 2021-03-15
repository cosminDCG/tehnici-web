var filmFavorit = {
    titlu: "La moara cu noroc",
    durata: 130,
    actori: ["Constantin Codrescu", "Olga Tudorache", "Geo Barton"]
}

function afisareFilm(o){
    console.log('"' + o.titlu + '"' + " a durat " + o.durata + " minute. Actori: " + o.actori);
}

afisareFilm(filmFavorit);