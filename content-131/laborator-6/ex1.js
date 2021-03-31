
//functiile pentru evenimente se pun in afara onload
function youClickedAButton() {
    // var heading = document.getElementById("heading-3");
    // heading.style.color = "red";
    // heading.innerText = "New Text";
}

function changeSpan() {
    let colors = ["red", "blue", "green"];
    let spans = document.getElementsByTagName("span");

    for(let i = 0; i < spans.length; i++) {
        spans[i].style.backgroundColor = colors[i];
    }
}

function insertInDiv() {
    var div = document.getElementById("insertDiv");
    var p = document.createElement("p");
    p.innerText = "Dynamic p";

    div.appendChild(p);
}

function removeDiv() {
    var div = document.getElementById("insertDiv");
    div.removeChild(div.lastChild);
}

function changeSource() {
    var image = document.getElementById("imageId");
    var source = image.getAttribute("src");
    console.log(source);
    if(source == "casa.jpeg") {
        image.setAttribute("src", "download.jpeg");
    } else {
        image.setAttribute("src", "casa.jpeg");
    }
    
}

//asta se intampla cand se incarca pagina
window.onload = function () {
    var heading = document.getElementById("heading-3");
    heading.style.color = "red";
    heading.innerText = "New Text";
    heading.classList.add("myClass");
    heading.className = "class1 class2";
    

    var myDiv = document.getElementById("myDiv");
    console.log(myDiv.childNodes);
    myDiv.childNodes[1].style.color = "yellow";
    //myDiv.innerHTML = "<h3>P added with innerHTML </h3>"

    //getElementsByClassName("yourClass");

}
