// function equalTest() {
//     let x = 1;

//     if(x == '1') {
//         console.log("Adevarat");
//     } else {
//         console.log("Fals");
//     }
// }

// equalTest();

///////////////

console.log('Starting app'); //1

//first block 
setTimeout(() => {
  console.log('First setTimeout'); //2
}, 2000);

//second block 
setTimeout(() => {
  console.log('Second setTimeout'); //3
}, 0);

console.log('Finishing app'); //4

// stack: 2

// afisat: 1 4 3 2