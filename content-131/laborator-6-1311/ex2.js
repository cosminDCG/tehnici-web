var filme = [
    {
        titlu: "Film1",
        durata: 120,
        actori: ["Actor 1", "Actor 2", "Actor 3"],
        vizualizat: true,
        poza: "casa.jpeg"
    },
    {
        titlu: "Film2",
        durata: 130,
        actori: ["Actor 4", "Actor 5", "Actor 6"],
        vizualizat: false,
        poza: "casa.jpeg"
    },
    {
        titlu: "Film3",
        durata: 100,
        actori: ["Actor 7", "Actor 8", "Actor 9"],
        vizualizat: true,
        poza: "casa.jpeg"
    }
]

window.onload = function() {
    let body = document.getElementsByTagName("body")[0];
    let ul = document.createElement("ul");
    for(let i = 0; i < filme.length; i++) {
        let li = document.createElement("li");

        let pTitlu = document.createElement("p");
        pTitlu.innerText = filme[i].titlu;

        let pDurata = document.createElement("p");
        pDurata.innerText = filme[i].durata;

        let pActori = document.createElement("p");
        pActori.innerText = filme[i].actori;

        let img = document.createElement("img");
        img.setAttribute("src", filme[i].poza);

        if(filme[i].vizualizat == false) {
            li.style.color = "red";
        }

        li.appendChild(pTitlu);
        li.appendChild(pDurata);
        li.appendChild(pActori);
        li.appendChild(img);
        
        ul.appendChild(li)
    }

    body.appendChild(ul);
}