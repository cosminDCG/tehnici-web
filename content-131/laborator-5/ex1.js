//console.log("My first log in JS");

// function printSomething() {
//     console.log("ceva");
// }

// printSomething();

// function printSomethingWithArguments(str1, str2) {
//     console.log(str1, str2);
// }

// printSomethingWithArguments("string1", "string2");

//////////////
var person = {
    nume: "Ion Ion",
    varsta: 47,
    calitati: ["frumos", "destept", "empatic"]
}

//console.log(person.nume);
console.log(person["nume"]);
console.log("Varsta:", person.varsta);
console.log("Calitati:")
for(let i = 0; i < person.calitati.length; i++) {
    console.log(person.calitati[i]);
}

function clickButton() {
    alert('You clicked a button!');
}