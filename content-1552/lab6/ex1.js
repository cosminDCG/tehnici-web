function youClickedAButton() {
    alert("You clicked a button!");
}

window.onload = function () {
    var h3 = document.getElementById("h3-id");
    console.log(h3);

    //schimb culoarea
    h3.style.color = "red";

    //afisez textul
    console.log(h3.textContent)

    h3.onclick = function() {
        h3.textContent = "New Text";
    }

    let colors = ["red", "green", "yellow", "blue"];
    var pArray = document.getElementsByClassName("p-class");
    console.log(pArray);
    for(let i = 0; i < pArray.length; i++) {
        pArray[i].style.font = colors[i];
    }

    //getElementsByTagName;
    let div = document.getElementById("div-id");
    //div.innerHTML = "<p>This is a dynamic p</p> <button class='btn btn-md btn-warning'>This is a dynamic button</button>";
    let p = document.createElement("p");
    p.innerText = "This is a dynamic p";
    div.appendChild(p);

    let button = document.createElement("button");
    button.innerText = "This is a dynamic button";
    //button.className = "btn btn-md btn-warning";
    button.classList.add("btn");
    button.classList.add("btn-md");
    button.classList.add("btn-warning");
    button.onclick = function() {
        let ul = document.getElementsByTagName("ul");
        let elementToRemove = ul[0].lastChild;
        ul[0].removeChild(elementToRemove);
    }
    div.appendChild(button);

    //img.setAttribute('src', 'path-to-img');
}

var movieArray = [
    {
        titlu: "First title",
        durata: 120,
        actori: ["Actor1", "Actor2"],
        vazut: true
    },
    {
        titlu: "Second title",
        durata: 140,
        actori: ["Actor3", "Actor4"],
        vazut: false
    }
]