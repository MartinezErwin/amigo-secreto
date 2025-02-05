let amigos = [];


function agregarAmigo() {
    //Capturando el valor del campo de entrada:
    let nombre = document.getElementById('amigo').value;
    
    //Validando la entrada
    nombre === '' ? alert('No dejes el campo vacio'):

    //Actualizar el array de amigos
    amigos.push(nombre);

    //Limpiando el campo de entrada:
    document.getElementById('amigo').value = '';

    //Imprimiendo en la consola el resultado
    console.log(amigos);   
}
  

