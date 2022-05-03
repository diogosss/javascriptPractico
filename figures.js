//SQUARE------------------------------------------
//square perimeter
console.group("SQUARE");

function perimeterSquare (side){
    return side * 4;
} 

//square area
function areaSquare(side){
    return side * side;
} 

console.groupEnd();

//TRIANGLE------------------------------------------
//triangle perimeter
console.group("TRIANGLE");

function perimeterTriangle(side1, side2, base) {
    return side1 + side2 + base;
} 

//triangle area
function areaTriangle(base, height) {
    return (base * height) / 2;
} 

console.groupEnd();

//CIRCLE------------------------------------------
//circle perimeter
console.group("CIRCLE");
const PI = Math.PI;

function diameterCircle (radius) {
    return  2 * radius;
}

function perimeterCircle(radius) {
    return diameterCircle(radius) * PI;
} 

function areaCircle(radius) {
    return (radius*radius) * PI;
} 


console.groupEnd();