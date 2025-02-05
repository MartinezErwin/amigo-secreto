let amigos = [];


function agregarAmigo() {
    //Capturando el valor del campo de entrada:
    let nombre = document.getElementById('amigo').value;
    
    //Validando la entrada
    if (nombre === "") {
        alert("No dejes campos vacios")
        return;
    }

    if (!isNaN(nombre)) {
        alert("No instroduzcas numeros")
        return;
    }

    //Actualizar el array de amigos
    amigos.push(nombre);

    //Limpiando el campo de entrada:
    document.getElementById('amigo').value = '';

    //Imprimiendo en la consola el resultado
    console.log(amigos);   
}
  

