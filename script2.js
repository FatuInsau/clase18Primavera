let perrito = ['Negrito', 10]

// Objetos
// guardamos cosas entre llave con propiedad-valor
                                // clave-valor
                                // key-value

let perro = {
    nombre: 'Negrito',
    edad: 10,
    raza:'Caniche',
    vacunado: true,
    apodos: ['Cabon','Nubecita']
}

// como acceder a las propiedades
perro.raza = 'Salchicha'
perro.cuatroPatas = true

// codigo para saber las propiedades
// Object.keys --> retorna un array con las propiedades del objeto

let propiedades = Object.keys(perro);
// propiedades= [ 'nombre', 'edad', 'raza', 'vacunado', 'apodos', 'cuatroPatas' ]

let algunaPropiedad = propiedades[1]
// edad = 'edad'

// otra forma de acceder a propiedades a traves de variables
console.log(perro[algunaPropiedad])





