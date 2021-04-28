var currentDogId;

function fetchDogs() {
    let content = document.getElementById("content");

    let body = document.getElementsByTagName("body")[0];
    let p = document.createElement("p");
    p.innerText = "loading...";
    p.setAttribute("id", "loading");
    body.appendChild(p);

    fetch('http://localhost:3000/dogs', {
    method: 'get' // sunt 4 requesturi principale: GET, POST, PUT, DELETE
    }).then(function(response) {
        response.json().then((data) => {
            if(data.length) {
                body.removeChild(p);
            }

            for(let i = 0; i < data.length; i++){
                let image = document.createElement("img");
                image.setAttribute("src", data[i].img);
                image.width = 100;
                content.appendChild(image);

                let h2 = document.createElement("h2");
                h2.innerText = data[i].name;
                content.appendChild(h2);

                let editButton = document.createElement("button");
                let editText = document.createTextNode("Edit");
                editButton.appendChild(editText);
                editButton.onclick = function() {
                    document.getElementById("name").value = data[i].name;
                    document.getElementById("image").value = data[i].img;
                    currentDogId = data[i].id;
                }
                content.appendChild(editButton);

                let deleteButton = document.createElement("button");
                let deleteText = document.createTextNode("Delete");
                deleteButton.appendChild(deleteText);
                deleteButton.onclick = function() {
                    deleteDog(data[i].id);
                }
                content.appendChild(deleteButton);

                let hr = document.createElement("hr");
                content.appendChild(hr);
            }
        })
    })
}

fetchDogs()

function addDog() {
    var name = document.getElementById("name").value;
    var img = document.getElementById("image").value;
    var newDog = {
        name: name,
        img: img
    }
    fetch('http://localhost:3000/dogs', {
        method: 'post', // semnalam faptul ca vrem sa introducem ceva nou in baza de date
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDog)
    }).then(function(response) {
        console.log(response);
    })
}

function editDog() {
    var name = document.getElementById("name").value;
    var img = document.getElementById("image").value;

    var newDog = {
        name: name,
        img: img
    }

    fetch('http://localhost:3000/dogs/' + currentDogId, { //ca sa schimbam datele unui caine, trebuie sa il identificam prin id. Acesta se afla in currentDogId. La final url-ul va fi http://localhost:3000/dogs/1
        method: 'put', // semnalam faptul ca vrem sa actualizam ceva deja existent in baza de date
        headers: {
            'Content-Type': 'application/json' //semnalam faptul ca lucram cu fisiere de tip json
        },
        body: JSON.stringify(newDog) // in body vom pune noul obiect (newDog). Acest body va ajunge in baza de date. Pentru a putea fi pus in BD trebuie sa fie sub forma de string, de aceea folosim JSON.stringify
    }).then(function(response) {
    })
}

function deleteDog(id) {
    fetch('http://localhost:3000/dogs/' + id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        window.location.reload();
    })
}

function filterByColor() {
    let content = document.getElementById("content");
    let color = document.getElementById("filter").value;
    fetch('http://localhost:3000/dogs/filter/property?color=' + color, {
    method: 'get' // sunt 4 requesturi principale: GET, POST, PUT, DELETE
    }).then(function(response) {
        //sterg tot din body
        while(content.hasChildNodes()) {
            content.removeChild(content.lastChild);
        }

        response.json().then((data) => {

            for(let i = 0; i < data.length; i++){
                let image = document.createElement("img");
                image.setAttribute("src", data[i].img);
                image.width = 100;
                content.appendChild(image);

                let h2 = document.createElement("h2");
                h2.innerText = data[i].name;
                content.appendChild(h2);

                let editButton = document.createElement("button");
                let editText = document.createTextNode("Edit");
                editButton.appendChild(editText);
                editButton.onclick = function() {
                    document.getElementById("name").value = data[i].name;
                    document.getElementById("image").value = data[i].img;
                    currentDogId = data[i].id;
                }
                content.appendChild(editButton);

                let deleteButton = document.createElement("button");
                let deleteText = document.createTextNode("Delete");
                deleteButton.appendChild(deleteText);
                deleteButton.onclick = function() {
                    deleteDog(data[i].id);
                }
                content.appendChild(deleteButton);

                let hr = document.createElement("hr");
                content.appendChild(hr);
            }
        })
    })
}
