var blackFridayCart = {
    telefon: "350",
    consola: "250",
    televizor: "450",
    iepurasPlus: "10.60",
    cercei: "20.34",
    geanta: "22.36"
};

function getCartValue(object) {
    console.log(parseFloat(object.telefon) + parseFloat(object.consola) + parseFloat(object.televizor) + parseFloat(object.iepurasPlus) + parseFloat(object.geanta) + parseFloat(object.cercei));
}

getCartValue(blackFridayCart);