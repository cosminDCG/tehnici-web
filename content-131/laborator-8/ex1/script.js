let storyButton = document.getElementById("story-button");
storyButton.addEventListener("click", function() {
    let places = document.getElementById("places").value;
    let adjective = document.getElementById("adjective").value;
    let person = document.getElementById("person").value;

    let result = person + " a vizitat " + adjective + " " + places;

    let story = document.getElementById("story");
    story.innerText = result;
})