// numerosPares(arrNumeros)
// Crear una función numerosPares que tome como argumento un array de numeros devuelva un array con los numeros pares. Ejemplo:

function numerosPares (arrNumeros) {
    return arrNumeros.filter( (item)=>item%2===0 )
}

console.log(numerosPares([5,8,9,5,3,85]))
console.log(numerosPares([4,85,63,94,10]))