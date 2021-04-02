window.onload = function() {
    let span1 = document.getElementById("nickname");
    let span2 = document.getElementById("favorites");
    let span3 = document.getElementById("hometown");

    span1.innerText = "my-nickname";
    span2.innerText = "favorite stuff";
    span3.innerText = "Roman";

    let liArray = document.getElementsByTagName("li");
    for(let i = 0; i < liArray.length; i++) {
        liArray[i].classList.add("list-item");
    }

    let body = document.getElementsByTagName("body")[0];
    let img = document.createElement("img");
    img.setAttribute("src", "casa.jpeg");
    body.appendChild(img);
}