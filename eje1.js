// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

function sumarNumeros (arrNumeros) {
    let resultado = 0;
    for(let i=0;i<arrNumeros.length;i++){
        // resultado = resultado + arrNumeros[i]
        resultado += arrNumeros[i]
    }
    return resultado;
}

console.log(sumarNumeros([5, 7, 10, 12, 24]) )// 58
// 0 + 5
// 5 + 7
// 12 + 10
// 22 + 12
// 34 + 24
// 58


function sumarNumeros2 (arrNumeros) {
    let resultado = 0;
    arrNumeros.forEach( (numerito)=>{
        resultado += numerito;
    } )
    return resultado;
}

// console.log(sumarNumeros2([5, 7, 10, 12, 24]) )// 5

function sumarNumeros3 (arrNumeros) {
    return arrNumeros.reduce( (sumados,item)=>{
        return sumados+item;
    }, 0)
}

function sumarNumeros3 (arrNumeros) {
    return arrNumeros.reduce( (sumados,item)=>sumados+item, 0)
}