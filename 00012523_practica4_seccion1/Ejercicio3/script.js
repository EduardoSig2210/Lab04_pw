function ordenar(arr){
    const nuevoArray = [...arr]
    for (let i = 0; i < nuevoArray.length; i++){
        for (let j = 0; j < nuevoArray.length - i - 1; j++){
            if(nuevoArray[j] > nuevoArray[j+1]){
                let temp = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j+1];
                nuevoArray[j+1] = temp;
            }
        }
    }
    return nuevoArray;
}

function esPar(numero){
    return numero %2 === 0;
}

function calcularDiasCrecimiento(velocidadCrecimiento, VelocidadDecrecimiento, alturaDeseada){
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;
        if(altura >= alturaDeseada) {return dias}
        altura -= VelocidadDecrecimiento
    }
    return dias;
}

console.log(ordenar([14, 23, 99, 874, 93, 12]));
console.log(esPar(7));
console.log(calcularDiasCrecimiento(2,3,15));