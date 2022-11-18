// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const copyCatA = [...cats, name];
    return copyCatA;
}
function prependCat(name){
    const copyCatP = [name, ...cats];
    return copyCatP;
}
function  removeLastCat() {
    const newArrayL = cats.slice(0, -1);
    return newArrayL;
}
function removeFirstCat() {
    const newArayF = cats.slice(1);
    return newArayF;
}