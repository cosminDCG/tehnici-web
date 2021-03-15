//ex 1
var person = {
    nume: "Ion Ion",
    varsta: 40,
    calitati: ["destept", "empatic", "frumos"]
}


function printAttributes(object) {
    console.log("Nume: " + object.nume);
    //console.log("Nume: " + object["nume"])
    console.log("Varsta: " + object.varsta);
    console.log("Calitati:");

    for(let i = 0; i < object.calitati.length; i++) {
        console.log(object.calitati[i]);
    }
}

printAttributes(person);