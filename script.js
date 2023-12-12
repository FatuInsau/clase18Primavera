let numeros = [5,78,3,4,6,7,88]

// forEach
// nos permite recorrer el array y hacer algo con cada item

// item --> cada uno de los lugares del array 5, 78, 3, ...
// numeros.forEach( (item)=>{
//     console.log(item)
// } )

// Map
// recorre el array, hace algo con cada item
// retorna un nuevo array con los resultados

let resultado = numeros.map( (item)=>{
    return item*10;
} )

// Filter 
// retorna un nuevo array con valores filtrados segun una condicion

numeros.filter( (item)=>{
    // returna verdadero o falso (filtra en base a eso)
    return item>6;
} )

let numerosFiltrados = numeros.filter( (item)=>item>6 )

// Reduce
// retorna un solo elemento (acumulador)
// recorre el array y hace algo con todos los items

let suma = numeros.reduce( (acumulador,item)=>{
    console.log(acumulador)
    return acumulador+item
}, 0)


// ejemplo con string

let arrPalabras = ['Buenas', 'tardes', 'todo', 'bien'];

let frase= arrPalabras.reduce( (textoFinal,palabra)=>{
    return textoFinal + ' ' + palabra
}, 'Saludo:' )

console.log(frase)