// function runFiveMiles() {
//     console.log("Go for a five- mile run");
// }
// function liftWeights() {
//     console.log("Pump iron");
// }
// function swimFortyLaps () {
//     console.log("Swim 40 laps");

const { spy } = require("chai");

// }
// function Monday () {
//     runFiveMiles();
//     liftWeights();
// }

// function exceriseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }

// function Monday () {
//     exceriseRoutine(liftWeights)
// }
// function exerciseRoutine(postRunActivity){
//     runFiveMiles();
//     postRunActivity();
// }
// exceriseRoutine(function () {
//     console.log ("Stretch! Work that core!");

// })
// exceriseRoutine(() => {
//     console.log("Stretch! Work that core!");
// })
// function morningRoutine(exercise){
//     let breakfast;
//    if (excerise === liftWeights) {
//     breakfast= "protein bar";
//    } else if (exercise=== swimFortyLaps){
//     breakfast="kale smoothie";
//    } else {
//     breakfast ="granola"
//    }
//    exerciseRoutine(exercise)
//    return function () {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//    }
// }
// const afterExercise= morningRoutine(liftWeights); 


function receivesAFunction (Spy){
    return Spy()
}
function returnsANamedFunction(){
    function namedFunction(){
        console.log ("this is a named function.")
    }
    return namedFunction
}
function returnsAnAnonymousFunction() {
    return function(){ 
        console.log( "this is an anonymous function.")
    }
    

}