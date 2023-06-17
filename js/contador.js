//function flecha
decrementar = () => {
    const valor = obtenerValor();
    const nuevoValor = valor - 1;
    //actualizamos el valor en el div
    //invocando/llamando/ejecutando a la funcion actualizarValor(..)
    actualizarValor(nuevoValor);
}
//funciones flecha = arrow function
incrementar = () => {
    let valor = obtenerValor();
    valor = valor +1;
    actualizarValor(valor);
}

function actualizarValor(nuevoValor) {
    document.getElementById('valor').value = nuevoValor;
}
function obtenerValor() {
    const apuntaadorAlValor = document.getElementById('valor');
    const value = apuntaadorAlValor.value;//esta en string
    return  Number(value);
}