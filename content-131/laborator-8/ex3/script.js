var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;
var sessionTimer = window.setTimeout(function() {
    alert("Sesiune expirata!")
}, 3000);

// Move the image on screen with 10px
function dogWalk() {
    var img = document.getElementsByTagName("img")[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft + movePixels + "px";
    // reset image position to start
    if (currentLeft > window.innerWidth - img.width) {
        img.style.left = "0px";
    }
}

// Call dogWalk function every 50 ms
function startDogWalk() {
    dogTimer = window.setInterval(dogWalk, delayMs);
}

var startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    clearTimeout(sessionTimer);
    startDogWalk();
    document.getElementById("info").innerText = "Viteza cainelui este de: " + movePixels + " px/s";
    startButton.disabled = true;
})

var stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", () => {
    clearInterval(dogTimer);
    clearTimeout(sessionTimer);
    document.getElementById("info").innerText = "Viteza cainelui este de: 0 px/s";
    startButton.disabled = false;
})

var speedButton = document.getElementById("speed-button");
speedButton.addEventListener("click", () => {
    clearTimeout(sessionTimer);
    movePixels += 50;
    document.getElementById("info").innerText = "Viteza cainelui este de: " + movePixels + " px/s";

    let checkIfResetSpeedButtonExists = document.getElementById("reset-button");
    if(!checkIfResetSpeedButtonExists) {
        let buttonsContainer = document.getElementById("buttons");

        let resetSpeedButton = document.createElement("button");
        resetSpeedButton.setAttribute("id", "reset-button");
        let buttonText = document.createTextNode("Reset speed");
        resetSpeedButton.appendChild(buttonText);
        resetSpeedButton.onclick = function () {
            clearTimeout(sessionTimer);
            movePixels = 10;
        }

        buttonsContainer.appendChild(resetSpeedButton);
    }
})


//avem o baza de date -> vrem sa scoatem niste obiecte

// async function functiaCareScoateDinBaza() {} 

// let result = await functiaCareScoateDinBaza() 

for(let i = 0 ; i < result.length; i++) {
    //manipulezi result
}
//console.log(result);
//result o sa fie null