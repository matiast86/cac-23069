const edad = [100, 55,  98, 23, 75, 105];

/*
let aux;
for(let i = 0; i < edad.length-1;i++ ) {
    for(let j = i+1; j < edad.length;j++ ) {
        if(edad[i] > edad[j]) {
            aux = edad[j];
            edad[j] = edad[i];
            edad[i] = aux;
        }
    }    
}
*/

const edad3 = edad.sort(asc);
console.log(edad3)

function asc(a,b) {
    // 10 - 5 > 0
    // 5 - 6  < 0
    // 5 - 5  = 0
    return b - a;
}