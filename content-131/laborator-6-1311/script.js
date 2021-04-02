function youClickedAButton() {
    let h1 = document.getElementById("headerId");
    console.log(h1);
    h1.style.color = "red";
    h1.innerText = "New h1 text";
}

function changeColor() {
    let colors = ["green", "blue", "yellow", "red"];
    let pArray = document.getElementsByTagName("p");

    for(let i = 0; i < pArray.length; i ++) {
        pArray[i].style.color = colors[i];
    }
}

function changeColorFromPContainer() {
    let colors = ["green", "blue", "yellow", "red"];
    let container = document.getElementById("pContainer");
    let pArray = container.getElementsByTagName("p");
    //document.getElementsByClassName("my-class");

    for(let i = 0; i < pArray.length; i ++) {
        pArray[i].style.color = colors[i];
    }
}

function changeFirstAndLastChild() {
    let ul = document.getElementById("myList");
    ul.childNodes[1].style.color = "red";
    ul.childNodes[5].style.color = "blue";
}

function createNewElement() {
    let div = document.getElementById("generatedContent");

    if(div.childNodes.length == 3) {
        div.classList.add("newClass");
        //div.className = "class1 class2 class3";
    }

    let newP = document.createElement("p");
    newP.innerText = "New generated element.";
    newP.classList.add("newpclass");

    div.appendChild(newP);
}

function removeLastElement() {
    let div = document.getElementById("generatedContent");
    if(div.childNodes.length) {
        div.removeChild(div.lastChild);
    }
}

function changeImage() {
    let img = document.getElementById("myImg");
    let source = img.getAttribute("src");

    console.log(source);
    if(source == "casa.jpeg") {
        img.setAttribute("src", "download.jpeg");
    } else {
        img.setAttribute("src", "casa.jpeg");
    }
}

window.onload = function() {
    let body = document.getElementsByTagName("body")[0];

    let h2 = document.createElement("h2");
    h2.innerText = "Dynamic h2";
    h2.style.color = "purple"

    body.appendChild(h2);

    let div1 = document.getElementById("div1");
    let newDiv = document.createElement("div");
    newDiv.innerText = "Div intermediar";
    newDiv.innerHTML = "<ul> <li>line with innerHTML</li> <li>line with innerHTML</li> </ul>"
    div1.insertAdjacentElement('afterend', newDiv);
}