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

// height Triangle isosceles
function heightTriangle(side1, side2, base){
    if(side1 === side2 && side1 != base){
        const height = Math.sqrt(side1**2 - base**2 / 4)
        return height;
    }else{
        return "Error";
    }
}

const calculAltura = function (a, b, c) {
    let A;
    if(a > b && b === c && a >= 2*b || b > a && a === c && b >= 2*a || c > a && a === b && c >= 2*a) {
        alert('Valores fuera de lo real');
    } else if(a > b && a === c || a < b && a === c) {
        A = Math.sqrt(Math.pow(a,2) - Math.pow(b/2, 2));
        return A;
    } else if(a > c && a === b || a < c && a === b) {
        A = Math.sqrt(Math.pow(a,2) - Math.pow(c/2, 2));
        return A;
    } else if(b > a && b === c || b < a && b === c) {
        A = Math.sqrt(Math.pow(b,2) - Math.pow(a/2, 2));
        return A;
    } else {
        alert('El triangulo no es Isósceles');
    }
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


//------ Conexion HTML
function calcPerimeterSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const perimetr = perimeterSquare(value);
    alert(perimetr);
}

function calcAreaSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const area = areaSquare(value);
    alert(area);
}

function calcPerimeterTriangle(){
    const side1 = document.getElementById("InputTriangle1");
    const side2 = document.getElementById("InputTriangle2");
    const base = document.getElementById("InputBase");
    const value1 = Number(side1.value);
    const value2 = Number(side2.value);
    const value3 = Number(base.value);
    const perimetr = perimeterTriangle(value1,value2,value3);
    alert(perimetr);
}

function calcAreaTriangle(){
    const base = document.getElementById("InputBase");
    const heigh = document.getElementById("InputHeight");
    const value1 = base.value;
    const value2 = heigh.value;
    const area = areaTriangle(value1,value2);
    alert(area);
}

function calcHeightTriangle(){
    const side1 = document.getElementById("InputTriangle1");
    const side2 = document.getElementById("InputTriangle2");
    const base = document.getElementById("InputBase");
    const value1 = Number(side1.value);
    const value2 = Number(side2.value);
    const value3 = Number(base.value);
    //const height = heightTriangle(value1,value2,value3);
    const height = calculAltura(value1,value2,value3);
    alert(height);
}

function calcPerimeterCircle(){
    const input = document.getElementById("InputRadius");
    const value = input.value;
    const perimetr = perimeterCircle(value);
    alert(perimetr);
}

function calcAreaCircle(){
    const input = document.getElementById("InputRadius");
    const value = input.value;
    const area = areaCircle(value);
    alert(area);
} 

