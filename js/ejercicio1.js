// Definir Arreglo

let numeros = [3, 5, 7, 1, 6];

console.log("El número menor en el arreglo " + numeros + "es: ")
console.log(min(numeros));

function min(num) {
    let min = num[0];
    for (let i = 0; i < num.length; i++) {
        if (num[i]< min) {
            min = numeros[i];
        }
    }
    return min;
}