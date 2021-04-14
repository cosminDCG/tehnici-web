var solution = document.getElementById("solution");

let squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", () => {
    let number = parseInt(document.getElementById("square-input").value);
    console.log(number);
    solution.innerText = number * number;
})

let halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", () => {
    let number = parseFloat(document.getElementById("half-input").value);
    solution.innerText = number/2;
})

let percentButton = document.getElementById("percent-button");
percentButton.addEventListener("click", () => {
    let percent1 = parseFloat(document.getElementById("percent1-input").value);
    let percent2 = parseFloat(document.getElementById("percent2-input").value);

    solution.innerText = percent1/100 * percent2;
})

let areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", () => {
    let areaInput = parseFloat(document.getElementById("area-input").value);
    console.log(areaInput);
    solution.innerText = 3.14 * areaInput * areaInput;
})