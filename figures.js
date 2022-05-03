//SQUARE------------------------------------------
//square perimeter
console.group("SQUARE");
const squareSide = 5;
console.log("Square side: " + squareSide + " cm");

const perimeterSquare = squareSide * 4;
console.log("Perimeter Square: " + perimeterSquare + " cm");

//square area
const areaSquare = squareSide * squareSide;
console.log("Area Square: " + areaSquare + " cm2");
console.groupEnd();

//TRIANGLE------------------------------------------
//triangle perimeter
console.group("TRIANGLE");
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;

console.log("Triangle sides are: " + triangleSide1 + " cm, " + triangleSide2 + " cm, " + triangleBase + " cm");
console.log("Triangle height : " + triangleHeight +" cm");

const triangleSquare = triangleSide1 + triangleSide2 + triangleBase;
console.log("Perimeter triangle: " + triangleSide1 + " cm");

//triangle area
const areaTriangle = (triangleBase * triangleHeight) / 2;
console.log("Area triangle: " + areaTriangle + " cm2");
console.groupEnd();

//CIRCLE------------------------------------------
//circle perimeter
console.group("CIRCLE");
const radiusCircle = 4;
const diameter = 2 * radiusCircle;
const PI = Math.PI;
const perimeterCircle = diameter * PI;
const areaCircle = (radiusCircle*radiusCircle) * PI;

console.log("Circle Radius: " + radiusCircle + " cm");
console.log("Circle Diameter: " + diameter + " cm");
console.log("PI: " + PI );
console.log("Circle Perimeter: " + perimeterCircle + " cm");
console.log("Circle Area: " + areaCircle + " cm2");


console.groupEnd();