//array vacio
const edificioVacio = [];

//array incializado con valores
const edificio = ['matias','veronica','brisabed' ];

//acceder a un elemento del array
console.log('0', edificio[0]);

//agregar elementos a un array
edificio.push('CARLOS');
// edificio.push('jose');

//recorrer 
//for estructura de iteración
console.log('recorriendo el edificio con for..');
for(let alguien of edificio ) {
    console.log(alguien);
}

//busca un elemento en el array
//¿josé vive en el edificio?
const jose = edificio.find(nombre => nombre === 'jose'); //voy a centrarme en QUE QUIERO

//if
if (jose !== undefined) { //valor true o false
    console.log('vive en el edificio', jose);
} else {
    console.log('NO vive en el edificio', jose);
}