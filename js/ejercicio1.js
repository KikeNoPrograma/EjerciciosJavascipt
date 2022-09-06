// Definir Arreglo

let numeros = [3, 5, 7, 1, 6];

console.log("El número mayor en el arreglo " + numeros + "es: ")
console.log(mayor(numeros))

function mayor(numeros) {
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i]> mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}