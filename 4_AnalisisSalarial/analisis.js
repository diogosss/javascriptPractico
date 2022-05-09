
const salariosEcu = Ecuador.map(
    function(person){
        return person.salary;
    }
);

/*const salariosEcu = Ecuador.map((person) => person.salary);*/

const salariosEcuSorted = salariosEcu.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

/*console.log(salariosEcu);*/
/*console.log(salariosEcuSorted);*/

function esPar(num){

        return (num % 2 === 0);

}

/*console.log(esPar(33));*/

function calcMedianAritmetic(lista) {
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const averageList = sumaLista/lista.length;

    return averageList;
}


function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personMiddle1 = lista[mitad - 1];
        const personMiddle2 = lista[mitad];
        const median = calcMedianAritmetic([personMiddle1,personMiddle2]);
        return median;
    }else{
        const personMiddle = lista[mitad];
        return personMiddle;
    }

}

console.log("dasd");
const medianaGeneralEcu = medianaSalarios(salariosEcuSorted);

//mediana top 10
const spliceStart = (salariosEcuSorted.length * 90) / 100;
const spliceCount = salariosEcuSorted.length - spliceStart;

const salariosEcuTop10 = salariosEcuSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Ecu = medianaSalarios(salariosEcuTop10);

console.log(
    medianaGeneralEcu,
    medianaTop10Ecu
);