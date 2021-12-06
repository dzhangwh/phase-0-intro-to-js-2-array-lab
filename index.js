// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat() {
    cats.push("Ralph");
    }

function destructivelyPrependCat() {
    cats.unshift("Bob");
    }

 function destructivelyRemoveLastCat() {
    cats.pop();
    }    
    
function destructivelyRemoveFirstCat() {
    cats.shift();
    }    

function appendCat(copyCatsOne) {
    copyCatsOne = [...cats, "Broom"];
    return copyCatsOne;
    }    

function prependCat(copyCatsTwo) {
    copyCatsTwo  = ["Arnold", ...cats];
    return copyCatsTwo;
    }    

function removeLastCat(copyCatsThree) {
    copyCatsThree  = cats.slice(0, cats.length -1);
    return copyCatsThree;
    }    

function removeFirstCat(copyCatsFour) {
    copyCatsFour  = cats.slice(1);
    return copyCatsFour;
    }  